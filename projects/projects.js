var twitchAlertHandler = {id: "TwitchAlertHandler", images:["../assets/project-images/twitch-alert-handler/1.PNG","../assets/project-images/twitch-alert-handler/2.PNG"]};
var dealOrNoDeal = {id:"DealOrNoDeal", images:["../assets/project-images/deal-or-no-deal/1.png","../assets/project-images/deal-or-no-deal/2.png"]};
var yahtzee = {id:"Yahtzee", images:["../assets/project-images/yahtzee/1.png","../assets/project-images/yahtzee/2.png"]};
var projects = [twitchAlertHandler, dealOrNoDeal, yahtzee];

function showAdditionalImages(id)
{
    var divExists = false;
    var divToAppend;
    var divs = document.getElementsByTagName("div");
    let imageDiv = document.createElement("div");
    imageDiv.id = id+"Images";
    let image1 = document.createElement("img");
    let image2 = document.createElement("img");

    for(var i = 0; i < divs.length; i++)
    {
        if(divs[i].id == id + "Images")
        {
            divExists = true;
            divs[i].remove();
        }
        if(divs[i].id == id)
        {
            divToAppend = divs[i];
            console.log("div found");
        }
    }
    if(!divExists)
    {
        for(let i = 0; i < projects.length; i++)
        {
            if(id == projects[i].id)
            {
                image1.src = projects[i].images[0];
                image2.src = projects[i].images[1];
                console.log("images found");
            }
        }
        image1.style.float = "left";
        image1.style.paddingLeft = "15px";
        image2.style.paddingLeft = "15px";
        imageDiv.style.paddingTop = "20px";
        imageDiv.append(image1);
        imageDiv.append(image2);
        divToAppend.append(imageDiv);
    }
}
