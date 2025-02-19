(globalThis["webpackChunktwitter_stats_display"]=globalThis["webpackChunktwitter_stats_display"]||[]).push([[64],{289:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(8761),s=n.n(r),o=(n(9665),n(5231),n(7725),n(3075),n(548),n(9359),n(6408),n(7664),n(3703),n(4170),n(2109)),u=n(425);class i{constructor(){}static get unngroupedGroupingName(){return"[Ungrouped]"}async loadDatabase(e){const t=n(1584),r=t({locateFile:e=>`${e}`}),s=fetch("twitter-stats.db.encrypted").then((e=>e.text())),[o,i]=await Promise.all([r,s]),a=u.AES.decrypt(i.toString(),e);try{this.db=new o.Database(this._cryptJsWordArrayToUint8Array(a))}catch{return Promise.reject()}return this.db.run("ALTER TABLE users RENAME TO original_users"),this.db.run("ALTER TABLE userMetrics RENAME TO original_userMetrics"),this.db.run("ALTER TABLE userProfileChanges RENAME TO original_userProfileChanges"),this.db.run("ALTER TABLE tweets RENAME TO original_tweets"),this.db.run("ALTER TABLE userTags RENAME TO original_userTags"),Promise.resolve(!0)}getDataForPeriod(e,t,n){this.db.run("DROP TABLE IF EXISTS users"),this.db.run("DROP TABLE IF EXISTS userMetrics"),this.db.run("DROP TABLE IF EXISTS userProfileChanges"),this.db.run("DROP TABLE IF EXISTS tweets"),this.db.run("DROP TABLE IF EXISTS userTags"),this.db.run("CREATE TABLE users AS SELECT * FROM original_users"),this.db.run("CREATE TABLE userMetrics AS SELECT * FROM original_userMetrics"),this.db.run("CREATE TABLE userProfileChanges AS SELECT * FROM original_userProfileChanges"),this.db.run("CREATE TABLE tweets AS SELECT * FROM original_tweets"),this.db.run("CREATE TABLE userTags AS SELECT * FROM original_userTags"),this._removedDataForExcludedTags(e),this._prepareUniqueDataForPeriod(t,n);const r={};return r.overviewStatsForPeriod=this._getOverviewStatsForPeriod(t,n),r.engagementDataByTagForPeriod=this._getEngagementDataByTagForPeriod(t,n),r.engagementDataByUserAndTagForPeriod=this._getEngagementDataByUserAndTagForPeriod(t,n),r.dailyUniqueCommentorsByTag=this._getDailyUniqueCommentorsByTagForPeriod(t,n),r.dailyStatsByTag=this._getDailyStatsByTag(t,n),r.wordCount=this._getWordStatsByTag(t,n),r.weightedWordCount=this._getWeightedWordStatsByTag(t,n),r.topTweets=this._getTopTweetsByTag(t,n),r}getUserMetricsForPeriod(e,t,n){const r="\n      SELECT\n        userMetrics.followersCount,\n        userMetrics.listedCount,\n        DATE(userMetrics.recordedAt, 'unixepoch') AS reportingDay\n      FROM\n        users\n      JOIN\n        userMetrics ON users.userId = userMetrics.userId\n      WHERE\n        username = $username AND\n        reportingDay >= DATE($start, 'unixepoch') AND\n        reportingDay <= DATE($end, 'unixepoch')\n      GROUP BY\n        reportingDay\n      ORDER BY\n        reportingDay",s=this._execQueryAndFetchResults(r,{$start:t,$end:n,$username:e}),o={followersCount:[],listedCount:[]};return s.forEach((e=>{o.followersCount.push([e.reportingDay,e.followersCount]),o.listedCount.push([e.reportingDay,e.listedCount])})),o}getUser(e){return this._execQueryAndFetchResults("SELECT * FROM users WHERE username LIKE $username",{$username:e})[0]}getUsers(){return this._execQueryAndFetchResults("SELECT * FROM users ORDER BY followersCount DESC")}getTagsForUser(e){return this._execQueryAndFetchResults("SELECT\n        tag\n      FROM\n        users\n      JOIN\n        userTags ON users.userId = userTags.userId\n      WHERE\n        users.username LIKE $username",{$username:e})}getUserProfileChanges(e){return this._execQueryAndFetchResults("SELECT\n        userProfileChanges.*,\n        ROW_NUMBER() OVER(ORDER BY recordedAt) AS rowNumber\n       FROM\n        userProfileChanges\n       JOIN\n        users ON users.userId = userProfileChanges.userId\n      WHERE\n        username LIKE $username",{$username:e})}getUserDataForPeriod(e,t,n){this.db.run("DROP TABLE IF EXISTS users"),this.db.run("DROP TABLE IF EXISTS userMetrics"),this.db.run("DROP TABLE IF EXISTS userProfileChanges"),this.db.run("DROP TABLE IF EXISTS tweets"),this.db.run("DROP TABLE IF EXISTS userTags"),this.db.run("CREATE TABLE users AS SELECT * FROM original_users"),this.db.run("CREATE TABLE userMetrics AS SELECT * FROM original_userMetrics"),this.db.run("CREATE TABLE userProfileChanges AS SELECT * FROM original_userProfileChanges"),this.db.run("CREATE TABLE tweets AS SELECT * FROM original_tweets"),this.db.run("CREATE TABLE userTags AS SELECT * FROM original_userTags"),this._prepareUniqueDataForPeriod(t,n);const r="\n    SELECT\n      users.userId,\n      COUNT(*) AS tweetsSum,\n      SUM(likesCount) AS likesSum,\n      SUM(likesCount) / CAST(COUNT(*) AS REAL) AS likesPerTweet,\n      SUM(quoteCount) AS quoteSum,\n      SUM(quoteCount) / CAST(COUNT(*) AS REAL) AS quotesPerTweet,\n      SUM(retweetCount) AS retweetSum,\n      SUM(retweetCount) / CAST(COUNT(*) AS REAL) AS retweetsPerTweet,\n      SUM(replyCount) AS replySum,\n      SUM(replyCount) / CAST(COUNT(*) AS REAL) AS repliesPerTweet,\n      SUM(tweets.numUniqueCommentors) / CAST(COUNT(*) AS REAL) AS uniqueCommentorsPerTweet,\n      SUM(hasVideo) AS videoSum,\n      100 * SUM(hasVideo) / CAST(COUNT(*) AS REAL) AS percentWithVideo,\n      SUM(hasPhoto) AS photoSum,\n      100 * SUM(hasPhoto) / CAST(COUNT(*) AS REAL) AS percentWithPhoto,\n      MAX(MAX(videoViews), MAX(likesCount), MAX(replyCount), MAX(retweetCount), MAX(quoteCount)) AS minKnownAudience,\n      (SUM(likesCount) + SUM(quoteCount) +  SUM(retweetCount)  + SUM(replyCount)) AS interactionsSum,\n      (SUM(likesCount) + SUM(quoteCount) +  SUM(retweetCount)  + SUM(replyCount)) / CAST(COUNT(*)  AS REAL) AS interactionsPerTweet,\n      DATE(tweets.createdAt, 'unixepoch') AS tweetReportingDay,\n      u.numUniqueCommentors\n    FROM\n      tweets\n    LEFT JOIN\n      users ON tweets.userId = users.userId\n    LEFT JOIN\n      dailyUniqueCommentorsForPeriodByUser AS u ON tweets.userId = u.userId AND\n      tweetReportingDay = u.reportingDay\n    WHERE\n      tweets.createdAt >= $start AND\n      tweets.createdAt <= $end AND\n      isRetweet = 0 AND\n      users.username LIKE $username\n    GROUP BY\n      tweetReportingDay\n    ORDER BY\n      tweetReportingDay",s=this._execQueryAndFetchResults(r,{$start:t,$end:n,$username:e}),o={tweetsSum:[],likesSum:[],likesPerTweet:[],quoteSum:[],quotesPerTweet:[],retweetSum:[],retweetsPerTweet:[],replySum:[],repliesPerTweet:[],uniqueCommentorsPerTweet:[],uniqueCommentors:[],videoSum:[],percentWithVideo:[],photoSum:[],percentWithPhoto:[],minKnownAudience:[],interactionsSum:[],interactionsPerTweet:[]};s.forEach((e=>{null!=e.tweetReportingDay&&(o.quoteSum.push([e.tweetReportingDay,e.quoteSum]),o.quotesPerTweet.push([e.tweetReportingDay,e.quotesPerTweet]),o.repliesPerTweet.push([e.tweetReportingDay,e.repliesPerTweet]),o.replySum.push([e.tweetReportingDay,e.replySum]),o.retweetSum.push([e.tweetReportingDay,e.retweetSum]),o.retweetsPerTweet.push([e.tweetReportingDay,e.retweetsPerTweet]),o.tweetsSum.push([e.tweetReportingDay,e.tweetsSum]),o.likesSum.push([e.tweetReportingDay,e.likesSum]),o.likesPerTweet.push([e.tweetReportingDay,e.likesPerTweet]),o.minKnownAudience.push([e.tweetReportingDay,e.minKnownAudience]),o.uniqueCommentors.push([e.tweetReportingDay,e.numUniqueCommentors]),o.uniqueCommentorsPerTweet.push([e.tweetReportingDay,e.uniqueCommentorsPerTweet]),o.interactionsSum.push([e.tweetReportingDay,e.interactionsSum]),o.interactionsPerTweet.push([e.tweetReportingDay,e.interactionsPerTweet]),o.photoSum.push([e.tweetReportingDay,e.photoSum]),o.percentWithPhoto.push([e.tweetReportingDay,e.percentWithPhoto]),o.videoSum.push([e.tweetReportingDay,e.videoSum]),o.percentWithVideo.push([e.tweetReportingDay,e.percentWithVideo]),o.percentWithVideo.push([e.tweetReportingDay,e.percentWithVideo]))}));const u="\n      SELECT\n        tweets.*\n      FROM\n        users\n      JOIN\n        tweets ON users.userId = tweets.userId\n      WHERE\n        users.username LIKE $username AND\n        tweets.createdAt >= $start AND\n        tweets.createdAt <= $end AND\n        isRetweet = 0\n      ORDER BY\n        likesCount + quoteCount + retweetCount + replyCount DESC\n      LIMIT 10",i=this._execQueryAndFetchResults(u,{$start:t,$end:n,$username:e});return o.topTweets=i,o}_removedDataForExcludedTags(e){e.forEach((e=>{const t="DELETE FROM userTags WHERE tag = $tag";this.db.run(t,{$tag:e})}));var t="DELETE FROM\n                    userMetrics\n                  WHERE\n                    userId\n                  NOT IN\n                    (SELECT\n                      userId\n                    FROM\n                      userTags)";this.db.run(t);t="DELETE FROM\n                  userProfileChanges\n                WHERE\n                  userId\n                NOT IN\n                  (SELECT\n                    userId\n                  FROM\n                    userTags)";this.db.run(t);t="DELETE FROM\n                  tweets\n                WHERE\n                  userId\n                NOT IN\n                  (SELECT\n                    userId\n                  FROM\n                    userTags)";this.db.run(t);t="DELETE FROM\n                  users\n                WHERE\n                  userId\n                NOT IN\n                  (SELECT\n                    userId\n                  FROM\n                    userTags)";this.db.run(t)}_prepareUniqueDataForPeriod(e,t){this._fillUniqueCommentorsForPeriodByTag(e,t),this._fillUniqueCommentorsForPeriodByUser(e,t),this._fillDailyUniqueCommentorsForPeriodByTag(e,t),this._fillDailyUniqueCommentorsForPeriodByUser(e,t)}_fillDailyUniqueCommentorsForPeriodByTag(e,t){this.db.exec("DROP TABLE IF EXISTS dailyUniqueCommentorsForPeriodByTag"),this.db.exec('CREATE TABLE "dailyUniqueCommentorsForPeriodByTag" (\n      "tag"\tTEXT NOT NULL,\n      "reportingDay"\tTEXT NOT NULL,\n      "numUniqueCommentors"\tINTEGER NOT NULL\n    );');const n="SELECT\n      uniqueCommentors,\n      tag,\n      DATE(createdAt, 'unixepoch') AS reportingDay\n    FROM\n      tweets\n    JOIN\n      userTags ON tweets.userId = userTags.userId\n    WHERE\n      tweets.createdAt >= $start AND\n      tweets.createdAt <= $end AND\n      isRetweet = 0",r=this._execQueryAndFetchResults(n,{$start:e,$end:t}),s={};r.forEach((e=>{s.hasOwnProperty(e.tag)||(s[e.tag]={}),s[e.tag].hasOwnProperty(e.reportingDay)||(s[e.tag][e.reportingDay]=new Set),e.uniqueCommentors=e.uniqueCommentors+"";const t=e.uniqueCommentors.split(",");t.forEach((t=>{"null"!=t&&s[e.tag][e.reportingDay].add(t)}))}));for(const[o,u]of Object.entries(s))for(const[e,t]of Object.entries(u))this.db.run("INSERT INTO dailyUniqueCommentorsForPeriodByTag\n            (tag,\n             reportingDay,\n             numUniqueCommentors)\n            VALUES (?, ?, ?)",[o,e,t.size])}_fillUniqueCommentorsForPeriodByUser(e,t){this.db.exec("DROP TABLE IF EXISTS uniqueCommentorsForPeriodByUser"),this.db.exec('CREATE TABLE "uniqueCommentorsForPeriodByUser" (\n      "userId"\tSTRING NOT NULL,\n      "numUniqueCommentors"\tINTEGER NOT NULL,\n      PRIMARY KEY("userId")\n    )');const n="SELECT\n        userId,\n        tweetId,\n        createdAt,\n        uniqueCommentors\n      FROM\n        tweets\n      WHERE\n        tweets.createdAt >= $start AND\n        tweets.createdAt <= $end AND\n        isRetweet = 0",r=this._execQueryAndFetchResults(n,{$start:e,$end:t}),s={};r.forEach((e=>{s.hasOwnProperty(e.userId)||(s[e.userId]=new Set),e.uniqueCommentors=e.uniqueCommentors+"";const t=e.uniqueCommentors.split(",");t.forEach((t=>{"null"!=t&&s[e.userId].add(t)}))}));for(const[o,u]of Object.entries(s))this.db.run("INSERT INTO uniqueCommentorsForPeriodByUser (userId, numUniqueCommentors) VALUES (?, ?)",[o,u.size])}_fillDailyUniqueCommentorsForPeriodByUser(e,t){this.db.exec("DROP TABLE IF EXISTS dailyUniqueCommentorsForPeriodByUser"),this.db.exec('CREATE TABLE "dailyUniqueCommentorsForPeriodByUser" (\n      "userId"\tSTRING NOT NULL,\n      "reportingDay"\tTEXT NOT NULL,\n      "numUniqueCommentors"\tINTEGER NOT NULL\n    )');const n="SELECT\n        userId,\n        tweetId,\n        DATE(createdAt, 'unixepoch') AS reportingDay,\n        uniqueCommentors\n      FROM\n        tweets\n      WHERE\n        tweets.createdAt >= $start AND\n        tweets.createdAt <= $end AND\n        isRetweet = 0",r=this._execQueryAndFetchResults(n,{$start:e,$end:t}),s={};r.forEach((e=>{const t=e.userId+"_"+e.reportingDay;s.hasOwnProperty(t)||(s[t]=new Set),e.uniqueCommentors=e.uniqueCommentors+"";const n=e.uniqueCommentors.split(",");n.forEach((e=>{"null"!=e&&s[t].add(e)}))}));for(const[o,u]of Object.entries(s)){const e=o.split("_"),t=e[0],n=e[1];this.db.run("INSERT INTO dailyUniqueCommentorsForPeriodByUser\n          (userId,\n           reportingDay,\n           numUniqueCommentors)\n         VALUES\n          (?, ?, ?)",[t,n,u.size])}}_fillUniqueCommentorsForPeriodByTag(e,t){this.db.exec("DROP TABLE IF EXISTS uniqueCommentorsForPeriodByTag"),this.db.exec('CREATE TABLE "uniqueCommentorsForPeriodByTag" (\n      "tag"\tSTRING NOT NULL,\n      "numUniqueCommentors"\tINTEGER NOT NULL,\n      PRIMARY KEY("tag")\n    )');const n="\n      SELECT\n        tweetId,\n        uniqueCommentors,\n        tag\n      FROM\n        tweets\n      JOIN\n        userTags ON tweets.userId = userTags.userId\n      WHERE\n        tweets.createdAt >= $start AND\n        tweets.createdAt <= $end AND\n        isRetweet = 0",r=this._execQueryAndFetchResults(n,{$start:e,$end:t}),s={};r.forEach((e=>{s.hasOwnProperty(e.tag)||(s[e.tag]=new Set),e.uniqueCommentors=e.uniqueCommentors+"";const t=e.uniqueCommentors.split(",");t.forEach((t=>{"null"!=t&&s[e.tag].add(t)}))}));for(const[o,u]of Object.entries(s))this.db.run("INSERT INTO uniqueCommentorsForPeriodByTag (tag, numUniqueCommentors) VALUES (?, ?)",[o,u.size])}_getWordStatsByTag(e,t){const n="SELECT\n                    tag,\n                    body\n                  FROM\n                    tweets\n                  JOIN\n                    users ON tweets.userId = users.userId,\n                    userTags ON tweets.userId = userTags.userId\n                  WHERE\n                    tweets.createdAt >= $start AND\n                    tweets.createdAt <= $end AND\n                    isRetweet = 0",r=this._execQueryAndFetchResults(n,{$start:e,$end:t}),s={};r.forEach((e=>{const t=e.tag;s.hasOwnProperty(t)||(s[t]={});const n=(0,o.removeStopwords)(e.body.split(" "),[...o.eng,...o.hye,...i.customStopwords]);n.forEach((e=>{e=e.replace(",",""),e=e.replace(",",""),e=e.replace('"',""),e=e.replace(".",""),e=e.replace("“",""),e=e.replace("”",""),e=e.replace("?",""),e=e.toLocaleLowerCase(),s[t].hasOwnProperty(e)||(s[t][e]=0),s[t][e]+=1}))}));const u={};for(const[o,i]of Object.entries(s)){const e=[];for(const[t,n]of Object.entries(i))e.push([t,n]);e.sort((function(e,t){return t[1]-e[1]})),u[o]=e.slice(0,20)}return u}_getWeightedWordStatsByTag(e,t){const n="SELECT\n                    tag,\n                    body,\n                    (likesCount + quoteCount + retweetCount + replyCount) AS weight\n                  FROM\n                    tweets\n                  JOIN\n                    users ON tweets.userId = users.userId,\n                    userTags ON tweets.userId = userTags.userId\n                  WHERE\n                    tweets.createdAt >= $start AND\n                    tweets.createdAt <= $end AND\n                    isRetweet = 0",r=this._execQueryAndFetchResults(n,{$start:e,$end:t}),s={};r.forEach((e=>{const t=e.tag;s.hasOwnProperty(t)||(s[t]={});const n=(0,o.removeStopwords)(e.body.split(" "),[...o.eng,...o.hye,...i.customStopwords]);n.forEach((n=>{n=n.replace(",",""),n=n.replace(",",""),n=n.replace('"',""),n=n.replace(".",""),n=n.replace("“",""),n=n.replace("”",""),n=n.replace("?",""),n=n.toLocaleLowerCase(),s[t].hasOwnProperty(n)||(s[t][n]=0),s[t][n]+=Number(e.weight)}))}));const u={};for(const[o,i]of Object.entries(s)){const e=[];for(const[t,n]of Object.entries(i))e.push([t,n]);e.sort((function(e,t){return t[1]-e[1]})),u[o]=e.slice(0,20)}return u}getWordUsageByTagAndTime(e,t,n){const r="SELECT\n                        COUNT(*) AS numMatching,\n                        tag,\n                        strftime(\"%m/%d/%Y\", createdAt, 'unixepoch') AS reportingDay\n                      FROM\n                        tweets\n                      LEFT JOIN\n                          userTags ON tweets.userId = userTags.userId\n                      WHERE\n                        tweets.createdAt >= $start AND\n                        tweets.createdAt <= $end AND\n                        tweets.isRetweet = 0 AND\n                        body LIKE $word\n                      GROUP BY reportingDay, tag",s=this._execQueryAndFetchResults(r,{$start:t,$end:n,$word:"%"+e+"%"}),o="SELECT\n                  COUNT(*) AS numTweets,\n                  tag,\n                  strftime(\"%m/%d/%Y\", createdAt, 'unixepoch') AS reportingDay\n                FROM\n                  tweets\n                LEFT JOIN\n                    userTags ON tweets.userId = userTags.userId\n                WHERE\n                  tweets.createdAt >= $start AND\n                  tweets.createdAt <= $end AND\n                  tweets.isRetweet = 0\n                GROUP BY reportingDay, tag",u=this._execQueryAndFetchResults(o,{$start:t,$end:n}),i=[];return s.forEach((e=>{const t=u.find((t=>t.tag==e.tag&&t.reportingDay==e.reportingDay)),n=100*Number(e.numMatching)/Number(t.numTweets),r=i.find((t=>t.name===e.tag));void 0!==r?r.data.push([e.reportingDay,n]):i.push({name:e.tag,data:[[e.reportingDay,n]]})})),console.log(i),i}_getTopTweetsByTag(e,t){const n="SELECT\n                    *\n                   FROM\n                      (SELECT\n                        tag,\n                        tweetId,\n                        row_number() OVER\n                          (PARTITION BY\n                            tag\n                          ORDER BY\n                            likesCount + quoteCount + retweetCount + replyCount DESC) AS tagRank\n                        FROM\n                          tweets\n                        JOIN\n                          users ON tweets.userId = users.userId,\n                          userTags ON users.userId = userTags.userId\n                        WHERE\n                          tweets.createdAt >= $start AND\n                          tweets.createdAt <= $end AND\n                          isRetweet = 0\n                        ORDER BY\n                          tag,\n                          tagRank)\n                    WHERE\n                      tagRank <= 5",r=this._execQueryAndFetchResults(n,{$start:e,$end:t}),s={};return r.forEach((e=>{s.hasOwnProperty(e.tag)||(s[e.tag]=[]),s[e.tag].push(e)})),s}_getDailyStatsByTag(e,t){const n="SELECT\n                    tag,\n                    COUNT(*) AS tweetsSum,\n                    SUM(likesCount) AS likesSum,\n                    SUM(likesCount) / CAST(COUNT(*)  AS REAL) AS likesPerTweet,\n                    SUM(quoteCount) AS quoteSum,\n                    SUM(quoteCount) / CAST(COUNT(*)  AS REAL) AS quotesPerTweet,\n                    SUM(retweetCount) AS retweetSum,\n                    SUM(retweetCount) / CAST(COUNT(*)  AS REAL) AS retweetsPerTweet,\n                    SUM(replyCount) AS replySum,\n                    SUM(replyCount) / CAST(COUNT(*)  AS REAL) AS repliesPerTweet,\n                    SUM(tweets.numUniqueCommentors) / CAST(COUNT(*)  AS REAL) AS uniqueCommentorsPerTweet,\n                    SUM(hasVideo) AS videoSum,\n                    100 * SUM(hasVideo) / CAST(COUNT(*)  AS REAL) AS percentWithVideo,\n                    SUM(hasPhoto) AS photoSum,\n                    100 * SUM(hasPhoto) / CAST(COUNT(*)  AS REAL) AS percentWithPhoto,\n                    MAX(MAX(videoViews), MAX(likesCount), MAX(replyCount), MAX(retweetCount), MAX(quoteCount)) AS minKnownAudience,\n                    (SUM(likesCount) + SUM(quoteCount) +  SUM(retweetCount)  + SUM(replyCount)) AS interactionsSum,\n                    (SUM(likesCount) + SUM(quoteCount) +  SUM(retweetCount)  + SUM(replyCount)) / CAST(COUNT(*)  AS REAL) AS interactionsPerTweet,\n                    DATE(tweets.createdAt, 'unixepoch') AS reportingDay\n                  FROM\n                    tweets\n                  LEFT JOIN\n                    users ON users.userId = tweets.userId,\n                    userTags ON users.userId = userTags.userId\n                  WHERE\n                    tweets.createdAt >= $start AND\n                    tweets.createdAt <= $end AND\n                    isRetweet = 0\n                  GROUP BY\n                    tag,\n                    reportingDay\n                  ORDER BY\n                    tag,\n                    reportingDay",r=this._execQueryAndFetchResults(n,{$start:e,$end:t}),s={tweetsSum:{},likesSum:{},likesPerTweet:{},quoteSum:{},quotesPerTweet:{},retweetSum:{},retweetsPerTweet:{},replySum:{},repliesPerTweet:{},uniqueCommentorsPerTweet:{},videoSum:{},percentWithVideo:{},photoSum:{},percentWithPhoto:{},minKnownAudience:{},interactionsSum:{},interactionsPerTweet:{}};return r.forEach((e=>{s.likesSum.hasOwnProperty(e.tag)||(s.tweetsSum[e.tag]=[],s.likesSum[e.tag]=[],s.likesPerTweet[e.tag]=[],s.uniqueCommentorsPerTweet[e.tag]=[],s.interactionsSum[e.tag]=[],s.interactionsPerTweet[e.tag]=[],s.videoSum[e.tag]=[],s.percentWithVideo[e.tag]=[],s.photoSum[e.tag]=[],s.percentWithPhoto[e.tag]=[]),null!=e.reportingDay&&(s.tweetsSum[e.tag].push([e.reportingDay,e.tweetsSum]),s.likesSum[e.tag].push([e.reportingDay,e.likesSum]),s.likesPerTweet[e.tag].push([e.reportingDay,e.likesPerTweet]),s.uniqueCommentorsPerTweet[e.tag].push([e.reportingDay,e.uniqueCommentorsPerTweet]),s.interactionsSum[e.tag].push([e.reportingDay,e.interactionsSum]),s.interactionsPerTweet[e.tag].push([e.reportingDay,e.interactionsPerTweet]),s.photoSum[e.tag].push([e.reportingDay,e.photoSum]),s.percentWithPhoto[e.tag].push([e.reportingDay,e.percentWithPhoto]),s.videoSum[e.tag].push([e.reportingDay,e.videoSum]),s.percentWithVideo[e.tag].push([e.reportingDay,e.percentWithVideo]))})),s}_getDailyUniqueCommentorsByTagForPeriod(e,t){const n="\n      SELECT\n        *\n      FROM\n        dailyUniqueCommentorsForPeriodByTag\n      WHERE\n        reportingDay >= DATE($start, 'unixepoch') AND\n        reportingDay <= DATE($end, 'unixepoch')\n      ORDER BY\n        tag,\n        reportingDay",r=this._execQueryAndFetchResults(n,{$start:e,$end:t}),s={};return r.forEach((e=>{s.hasOwnProperty(e.tag)||(s[e.tag]=[]),s[e.tag].push([e.reportingDay,e.numUniqueCommentors])})),s}_getOverviewStatsForPeriod(e,t){const n="SELECT\n                    numTweets,\n                    SUM(likesCount) AS likesSum,\n                    SUM(likesCount) / CAST(COUNT(*)  AS REAL) AS likesPerTweet,\n                    SUM(quoteCount) AS quoteSum,\n                    SUM(quoteCount) / CAST(COUNT(*)  AS REAL) AS quotesPerTweet,\n                    SUM(retweetCount) AS retweetSum,\n                    SUM(retweetCount) / CAST(COUNT(*)  AS REAL) AS retweetsPerTweet,\n                    SUM(replyCount) AS replySum,\n                    SUM(replyCount) / CAST(COUNT(*)  AS REAL) AS repliesPerTweet,\n                    SUM(tweets.numUniqueCommentors) / CAST(COUNT(*)  AS REAL) AS uniqueCommentorsPerTweet,\n                    SUM(hasVideo) AS videoSum,\n                    100 * SUM(hasVideo) / CAST(COUNT(*)  AS REAL) AS percentWithVideo,\n                    SUM(hasPhoto) AS photoSum,\n                    100 * SUM(hasPhoto) / CAST(COUNT(*)  AS REAL) AS percentWithPhoto,\n                    MAX(MAX(videoViews), MAX(likesCount), MAX(replyCount), MAX(retweetCount), MAX(quoteCount)) AS minKnownAudience,\n                    (SUM(likesCount) + SUM(quoteCount) +  SUM(retweetCount)  + SUM(replyCount)) AS interactionsSum,\n                    (SUM(likesCount) + SUM(quoteCount) +  SUM(retweetCount)  + SUM(replyCount)) / CAST(COUNT(*)  AS REAL) AS interactionsPerTweet,\n                    users.userId,\n                    username,\n                    profileImage,\n                    name,\n                    uniqueCommentorsForPeriodByUser.numUniqueCommentors AS uniqueCommentorsSum\n                  FROM\n                    tweets\n                  LEFT JOIN\n                    users ON users.userId = tweets.userId,\n                    uniqueCommentorsForPeriodByUser ON users.userId = uniqueCommentorsForPeriodByUser.userId\n                  LEFT JOIN\n                    (SELECT\n                      userId,\n                      COUNT(*) AS numTweets\n                     FROM\n                      tweets\n                     WHERE\n                      tweets.createdAt >= $start AND\n                      tweets.createdAt <= $end AND\n                      isRetweet = 0\n                     GROUP BY userId) AS tweetCounts ON users.userId = tweetCounts.userId\n                  WHERE\n                    tweets.createdAt >= $start AND\n                    tweets.createdAt <= $end AND\n                    isRetweet = 0\n                  GROUP BY\n                    users.userId";return this._execQueryAndFetchResults(n,{$start:e,$end:t})}_getEngagementDataByUserAndTagForPeriod(e,t){const n="SELECT\n                    COUNT(*) AS numTweets,\n                    SUM(likesCount) AS likesSum,\n                    SUM(likesCount) / CAST(COUNT(*)  AS REAL) AS likesPerTweet,\n                    SUM(quoteCount) AS quoteSum,\n                    SUM(quoteCount) / CAST(COUNT(*)  AS REAL) AS quotesPerTweet,\n                    SUM(retweetCount) AS retweetSum,\n                    SUM(retweetCount) / CAST(COUNT(*)  AS REAL) AS retweetsPerTweet,\n                    SUM(replyCount) AS replySum,\n                    SUM(replyCount) / CAST(COUNT(*)  AS REAL) AS repliesPerTweet,\n                    (SUM(likesCount) + SUM(quoteCount) +  SUM(retweetCount)  + SUM(replyCount)) AS interactionsSum,\n                    (SUM(likesCount) + SUM(quoteCount) +  SUM(retweetCount)  + SUM(replyCount)) / CAST(COUNT(*)  AS REAL) AS interactionsPerTweet,\n                    users.userId,\n                    profileImage,\n                    username,\n                    tag\n                  FROM\n                    tweets\n                  LEFT JOIN\n                    users ON tweets.userId = users.userId,\n                    userTags ON users.userId = userTags.userId\n                  WHERE\n                    tweets.createdAt >= $start AND\n                    tweets.createdAt <= $end AND\n                    isRetweet = 0\n                  GROUP BY\n                    users.userId,\n                    userTags.tag";return this._execQueryAndFetchResults(n,{$start:e,$end:t})}_getEngagementDataByTagForPeriod(e,t){const n="SELECT\n                    COUNT(*) AS numTweets,\n                    SUM(likesCount) AS likesSum,\n                    SUM(likesCount) / CAST(COUNT(*)  AS REAL) AS likesPerTweet,\n                    SUM(quoteCount) AS quoteSum,\n                    SUM(quoteCount) / CAST(COUNT(*)  AS REAL) AS quotesPerTweet,\n                    SUM(retweetCount) AS retweetSum,\n                    SUM(retweetCount) / CAST(COUNT(*)  AS REAL) AS retweetsPerTweet,\n                    SUM(replyCount) AS replySum,\n                    SUM(replyCount) / CAST(COUNT(*)  AS REAL) AS repliesPerTweet,\n                    (SUM(likesCount) + SUM(quoteCount) +  SUM(retweetCount)  + SUM(replyCount)) AS interactionsSum,\n                    (SUM(likesCount) + SUM(quoteCount) +  SUM(retweetCount)  + SUM(replyCount)) / CAST(COUNT(*)  AS REAL) AS interactionsPerTweet,\n                    users.userId,\n                    uniqueCommentorsForPeriodByTag.tag,\n                    uniqueCommentorsForPeriodByTag.numUniqueCommentors AS uniqueCommentorsSum\n                  FROM\n                    tweets\n                  LEFT JOIN\n                    users ON tweets.userId = users.userId,\n                    userTags ON users.userId = userTags.userId,\n                    uniqueCommentorsForPeriodByTag ON uniqueCommentorsForPeriodByTag.tag = userTags.tag\n                  WHERE\n                    tweets.createdAt >= $start AND\n                    tweets.createdAt <= $end AND\n                    isRetweet = 0\n                  GROUP BY\n                    userTags.tag";return this._execQueryAndFetchResults(n,{$start:e,$end:t})}getTags(){const e="SELECT DISTINCT(tag) AS tag FROM original_userTags",t=this._execQueryAndFetchResults(e,{}),n=[];return t.forEach((e=>{n.push(e.tag)})),n}_execQueryAndFetchResults(e,t){var n=this.db.prepare(e);n.bind(t);const r=[];while(n.step())r.push(n.getAsObject(null,{useBigInt:!0}));return r}_resultsToDictionaries(e,t){const n=[];return t.forEach((t=>{const r={};e.forEach(((e,n)=>r[e]=t[n])),n.push(r)})),n}_cryptJsWordArrayToUint8Array(e){const t=e.sigBytes,n=e.words,r=new Uint8Array(t);var s=0,o=0;while(1){if(s==t)break;var u=n[o++];if(r[s++]=(4278190080&u)>>>24,s==t)break;if(r[s++]=(16711680&u)>>>16,s==t)break;if(r[s++]=(65280&u)>>>8,s==t)break;r[s++]=255&u}return r}}s()(i,"customStopwords",["&amp;","❗️","↵","","🔴","will","not","no","so","-","—","its"])},1168:(e,t,n)=>{"use strict";n.d(t,{Z:()=>C});var r=n(9835);function s(e,t,n,s,o,u){const i=(0,r.up)("q-date"),a=(0,r.up)("q-popup-proxy"),S=(0,r.up)("q-btn");return(0,r.wg)(),(0,r.j4)(S,{icon:"event",color:"primary",label:"Select Report Period",push:""},{default:(0,r.w5)((()=>[(0,r.Wm)(a,{"transition-show":"scale","transition-hide":"scale"},{default:(0,r.w5)((()=>[(0,r.Wm)(i,{modelValue:s.dateRange,"onUpdate:modelValue":t[0]||(t[0]=e=>s.dateRange=e),minimal:"",range:"",square:"",onRangeEnd:s.reportRequested},null,8,["modelValue","onRangeEnd"])])),_:1})])),_:1})}var o=n(499);const u={props:{from:{required:!0,type:String},to:{required:!0,type:String}},emits:["reportRequested"],setup(e,{emit:t}){const n=(0,o.iH)({from:e.from,to:e.to}),r=e=>{t("reportRequested",n.value)};return{reportRequested:r,dateRange:n}}};var i=n(1639),a=n(4455),S=n(2765),A=n(7088),d=n(9984),T=n.n(d);const E=(0,i.Z)(u,[["render",s]]),C=E;T()(u,"components",{QBtn:a.Z,QPopupProxy:S.Z,QDate:A.Z})},2480:()=>{},7607:()=>{},803:()=>{},9547:()=>{}}]);