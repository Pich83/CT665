const path = require("path");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// const filePath = path.join(process.env.STORY_DIR, "story", "text.txt"); //__dirname

app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.send(`
  <div style="max-width: fit-content;
  margin-left: auto;
  margin-right: auto;">
    <h2 style="text-align: center;">Pichate Keawcharoen / m</h2>
    <h3 style="text-align: center;">ID: 65130126</h3>
    <img src="https://scontent.fbkk15-1.fna.fbcdn.net/v/t1.6435-9/162112399_811883192735628_1536160555567669163_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UaNh8EbeBKAQ7kNvgG_jeYj&_nc_ht=scontent.fbkk15-1.fna&oh=00_AYDgu8b_iGwar1Ln2uP_FpMsc8hLy3t7rRy16qHHGCahMA&oe=66710F81"/>
    <a href="/myresearch" style="text-align: center;">My Research</a> 
    <a href="/researchplan" style="text-align: center;">My Research Plan</a> 
   </div>  
    `);
});

app.get("/myresearch", (req, res) => {
  return res.send(`
    <p>with the current condition Bangkok area There has been an increase in the number of vehicles.
Drivers lack traffic discipline. Not respecting the law and traffic rules Cars and motorcycles were parked and driven on the sidewalk
As a result, pedestrian users will not be safe in their lives and property.
Although there is an Act to Maintain Cleanliness and Orderliness of the Country, B.E. 2535,
drivers are prohibited from driving cars. Motorcycles came to drive and parked on the sidewalk.
The penalty for violations is a starting fine of 2,000 baht and a maximum fine of 5,000 baht.
The Land Traffic Act B.E. 2522 prohibits drivers from driving on the sidewalk.
without reasonable cause Except for baby strollers sick or
disabled person Anyone who violates the law is subject to a fine ranging from 400 - 1,000 baht,
and if driving on the sidewalk. and then hit someone who was injured It is also a penalty under the Criminal Code.
It is an offense to drive carelessly and cause other people to suffer physical or mental harm.
There is a maximum penalty of imprisonment not exceeding 1 month, a fine not exceeding 10,000 baht, or both.
But there are still quite a few violators. Most drivers have reasons for their violations, such as rushing, the U-turn being too far away.
Or there may be personal behavior that is careless and just takes what is convenient for oneself.
without considering others or the public interest and from the National Statistical Office Pedestrians all over Thailand
There are an average of 2,490 accidents per year and there is a trend of increasing continuously.
The main cause is the behavior of drivers who do not respect traffic rules.
Especially in community areas next to main thoroughfares such as educational institutions,
places of worship, markets, department stores. All of which have a large number of pedestrians. Moreover,
traffic in these areas It always remains dense. As a result, some motorcyclists continue to disobey driving on the sidewalk.
Therefore, it is necessary to have a motorcycle detection system.
To facilitate the relevant officials through the existing Closed Circuit Television (CCTV) cameras.
    </p>
    <a href="/">Home</a>
    `);
});

app.get("/researchplan", (req, res) => {
  return res.send(`
    <table border="1"style="border-collapse: collapse;">
    <tr>
      <th>Work</th>
      <th>October</th>
      <th>November</th>
      <th>December</th>
      <th>January</th>
      <th>February</th>
      <th>March</th>
      <th>April</th>
      <th>May</th>
      <th>June</th>
      <th>July</th>
      <th>August</th>

    </tr>
    <tr>
      <td>เสนอหัวข้อและขอบเขตสารนิพนธ์</td>
      <td>start</td>
      <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>ศึกษาทฤษฎีที่เกี่ยวข้องและความต้องการของระบบ</td>  
        <td></td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>ศึกษาทดลองวิธีการสร้างโมเดลเทรน YOLOv8</td>
        <td></td>
        <td></td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>วิเคราะห์ออกแบบสร้างโมเดล YOLOv8 ที่ต้องการเปรียบเทียบโมเดล YOLOv8n และ YOLOv8m</td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>

    </tr>
    <tr>
        <td>ทดสอบการทำงานของโมเดลครั้งที่ 1</td> 
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td>start</td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>ปรับปรุงโมเดลปรับค่าพารามิเตอร์</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>ทดสอบการทำงานของโมเดลครั้งที่ 2</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>ประเมินผล</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td></td>
    </tr>
    <tr>
        <td>สรุป</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
    </tr>
</tr>
  </table>
  <a href="/">Home</a>
`);
});

app.get("/rest/researchplan", (req, res) => {
  res.status(200).json({
    research: {
      work: {
        problem: "october",
        literature: "november",
        design: "december",
        codingmvc: "january, february",
        codingfrontendbackend: "march, april, may",
        unittest: "june",
        test: "july",
        result: "august",
        conclusion: "august",
      },
    },
  });
});

app.listen(3000);
