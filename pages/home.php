<?php


if ($_SESSION['logindetails']['superuser']) {
    $lastCampaignID = Sql_Fetch_Row_query(sprintf('select id from %s where sent is not null order by entered desc limit 1',$GLOBALS['tables']['message']));
} else {
    $lastCampaignID = Sql_Fetch_Row_query(sprintf('select msg.id from %s msg
        join %s lm  on lm.messageid = msg.id
        join %s list on list.id = lm.listid
      where sent is not null
        and list.owner = %d
       order by msg.entered desc limit 1',
        $GLOBALS['tables']['message'],$GLOBALS['tables']['listmessage'],$GLOBALS['tables']['list'],$_SESSION['logindetails']['id']));
}

if ($_SESSION['logindetails']['superuser']) {
    $lastcampaign = Sql_Fetch_Assoc_Query(sprintf('select msg.id as messageid,count(um.viewed) as views, count(um.status) as total,
        subject,date_format(sent,"%%e %%M %%Y") as sent,bouncecount as bounced from %s um,%s msg
        where um.messageid = msg.id and sent is not null and um.status = "sent"
        group by msg.id order by msg.entered desc limit 1',
        $GLOBALS['tables']['usermessage'], $GLOBALS['tables']['message']));
    $subscribercountreq = Sql_Fetch_Row_Query(sprintf('select count(*) from %s', $GLOBALS['tables']['user']));
    $subscribercount = $subscribercountreq[0];
} else {
    $lastcampaign = Sql_Fetch_Assoc_Query(sprintf('select msg.id as messageid,count(um.viewed) as views, count(um.status) as total,
        subject,date_format(sent,"%%e %%b %%Y") as sent,bouncecount as bounced from
        %s um join %s msg on um.messageid = msg.id
        join %s lm  on lm.messageid = msg.id
        join %s list on list.id = lm.listid
        where sent is not null and um.status = "sent"
        and list.owner = %d
        group by msg.id order by msg.sent desc limit 1',
        $GLOBALS['tables']['usermessage'], $GLOBALS['tables']['message'], $GLOBALS['tables']['listmessage'],$GLOBALS['tables']['list'],$_SESSION['logindetails']['id'] ));
    $subscribercountreq = Sql_Fetch_Row_Query(sprintf('select count(*) from %s user
      left join %s listuser on user.id = listuser.userid
      left join %s list on listuser.listid = list.id
      where list.owner = %d', $GLOBALS['tables']['user'], $GLOBALS['tables']['listuser'], $GLOBALS['tables']['list'],$_SESSION['logindetails']['id']));
    $subscribercount = $subscribercountreq[0];
}

?>
<div class="row">

<div id="gettingstarted" class="col-sm-6 col-lg-4">
    <h3><span class="glyphicon glyphicon-star"></span>Getting Started</h3>
    <div class="well" style="height:100%">
        <?php
        if (!in_array('list', $GLOBALS['disallowpages'])) {
            echo '
            <a class="btn btn-primary" href="./?page=import">' . s('Import Subscribers') . '</a>
            <br />';
        }
        if (!in_array('send', $GLOBALS['disallowpages'])) {
            echo '<a class="btn btn-primary" href="./?page=send">' . s('Send a Campaign') . '</a>
            <br />';
        }
        if  (!in_array('statsoverview', $GLOBALS['disallowpages'])) { // are we allowed to view stats
            if (!empty($lastCampaignID)) { // are there any
                echo '<a class="btn btn-primary " href="./?page=statsoverview" title="View Campaign result statistics">' . s('View Statistics') . '</a>
                <br />';
            } else {
                echo '<span style="display:inline-block" title="Send your first campaign to obtain useful statistics" data-toggle="tooltip">
                    <a class="btn btn-primary btn-sm disabled" href="./?page=statsoverview">' . s('View Statistics') . '</a>
                </span>
                <br />';
            }
        }
        ?>
    </div>
</div><!-- /col -->


<div id="lastcampaign" class="col-sm-6 col-lg-4">
    <h3><span class="glyphicon glyphicon-signal"></span>Last Campaign Results</h3>
		<div id="lastcampaigncontent" class="well">
        <?php if (empty($lastcampaign['messageid'])) {
    print '<p>' . s('There are currently no statistics available') . '</p>';
} else {
    ?>

    <p>
                <span class="total">
                    Subject:
                    <a href="./?page=statsoverview&amp;id=<?php echo $lastcampaign['messageid'] ?>" title="View campaign statistics">
                        <?php echo $lastcampaign['subject'] ?>
                    </a>
                </span>
    </p>

    <p><span class="total"><?php echo $lastcampaign['total'] ?></span> Messages sent on <span class="total"><?php echo $lastcampaign['sent'] ?></span>.</p>
    <p><span class="total"><?php echo number_format($lastcampaign['views']) ?> </span> Viewed (<span class="total"><?php echo sprintf('%d', ($lastcampaign['views'] / $lastcampaign['total'] * 100)) ?>%</span>), and <span class="total"><?php echo $lastcampaign['bounced'] ?></span> bounced (<span class="total"><?php echo sprintf('%d', ($lastcampaign['bounced'] / $lastcampaign['total'] * 100)) ?>%</span>).</p>

    <?php
} ?>

		</div>
</div><!-- /col -->

<div class="clearfix visible-md visible-sm"></div>

<div class="col-sm-6 col-lg-4">
    <h3><span class="glyphicon glyphicon-question-sign"></span><?php echo s('Help') ?></h3>
    <div class="well">
        <ul>
            <li>
                <a href="https://www.phplist.org/manual/ch007_sending-your-first-campaign.xhtml" target="_blank">How to create a campaign</a>
            </li>
            <li>
                <a href="https://www.phplist.org/manual/ch009_basic-campaign-statistics.xhtml" target="_blank">How to use statistics</a>
            </li>
        </ul>
        <div class="row">
            <div class="col-lg-12">
                <p><a class="btn btn-primary" href="https://phplist.com/knowledgebase/"  target="_blank">View Knowledgebase</a>
                <a class="btn btn-primary" href="https://phplist.org/manual" target="_blank">View Manual</a></p>
            </div>
        </div>
        <p>Search Knowledgebase</p>
        <form method="get" target="_blank" action="https://phplist.com/blog/">
            <div class="input-group">
                <input type="text" class="form-control" name="s" value="" />
                <span class="input-group-btn">
                    <button class="btn btn-primary" type="submit">Search</button>
                </span>
            </div>
            <input type="hidden" name="post_type" value="kbe_knowledgebase" />
        </form>
    </div><!-- /well -->
</div><!-- /col-lg-6-->

</div><!--/row-->
<div class="clearfix visible-lg"></div>
