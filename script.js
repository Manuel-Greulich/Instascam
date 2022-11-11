let posts = [
    
    {     
        "name": "AMG",
        "image": "img/AMG.jpg",
        "imageprofile": "img/mercedes.png",
        "description": "Der neue CL AMG 63",
        "like": 1337,
        "comments": []
    },

    {  
        "name": "BMW",
        "image": "img/BMW.jpg",
        "imageprofile": "img/bmw.png",
        "description": "Der neue CL AMG 63",
        "like": 1337,
        "comments": []
    },

    {  
        "name": "Mercedes Benz",
        "image": "img/MERCEDES.jpg",
        "imageprofile": "img/mercedes.png",
        "description": "Der neue CL AMG 63",
        "like": 1337,
        "comments": []
    },

    {  
        "name": "Mustang",
        "image": "img/MUSTANG.jpg",
        "imageprofile": "img/mustanglogo.png",
        "description": "Der neue CL AMG 63",
        "like": 1337,
        "comments": []
    },

];


function render () {
    let content = document.getElementById('contentBox');
        content.innerHTML = '';

    for (let i = 0; i < posts.length; i++) {  
        const boxinhalt = posts[i];
        content.innerHTML +=`
        
            
            <div class="post-box">
                <div class="post-header">
                    <div class="post-header-left">
                        <img class="profile-img" src="${boxinhalt['imageprofile']}">
                        <div class="profil-name">
                            <b>${boxinhalt['name']}</b><br>  <br> 
                        </div>

                    </div>
                    <img src="img/dots.png" alt="">   
                </div>
                <img class="main-image" src="${boxinhalt['image']}" alt="">  


                <div class="icon-box">
                    <div>
                        <img onclick="changeColor()" id="getImage" src="img/heart.png">
                        <img src="img/bubble.png">
                        <img class="arrow" src="img/arrow.png">
                    </div>
                    <img class="bookmark <"src="img/bookmark.png" alt="">
                </div>

                <div class="likes">
                    <b>Gefällt ${boxinhalt['like']} Mal</b>
                </div>
                <div class="post-description">
                <b> ${boxinhalt['name']}</b> ${boxinhalt['description']}
                
                </div>

                <div class="commentStyle" id="commentOutput${i}">Kommentar</div>

                <div class="comment-box">
                    <div class="flex-commentbox">
                        <img  class="smyle" src="img/smyle.png" alt="">
                        <input style="border: unset;" required id="commentInput${i}" placeholder="Kommentieren....">
                    </div>
                    <span style="cursor: pointer;" onclick="addComment(${i})"><b>Posten</b></span>
                </div>
            </div>`;   
        }
    }


function addComment(i){
    let comment = document.getElementById('commentInput' + i).value;
    posts[i].comments.push(comment);
   
    comment.value = '';

    render();
    renderOutputComments(i);

}


function renderOutputComments(i){
    document.getElementById('commentOutput' + i).innerHTML = '';
    let comments = posts[i].comments;
    let commentField = document.getElementById('commentOutput' + i);

        for (let i = 0; i < comments.length; i++) {
            commentField.innerHTML +=`
            <span class="comment-section"> <b> User1 </b> ${comments[i]}</span>
            `;
        }

}


function changeColor() {
    var Image_ID = document.getElementById('getImage');
    if (Image_ID.src.match("img/heart.png")) {
        Image_ID.src = "img/redheart.png";
    }
    else {
        Image_ID.src = "img/heart.png";
    }
}  




