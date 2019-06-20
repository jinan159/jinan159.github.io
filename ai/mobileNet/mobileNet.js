let net;
let consoleElem = document.getElementById('console');

async function app() {

    // console.log('Loading mobilenet..');
    consoleElem.innerHTML = '<br />' + 'mobilenet 로드중..';

    // Load the model.
    net = await mobilenet.load();
    // console.log('Sucessfully loaded model');
    consoleElem.innerHTML += '<br />' + '모델 로드 성공';

    // Make a prediction through the model on our image.
    const imgEl = document.getElementById('img');
    const classes = await net.classify(imgEl);
    // console.log(result);
    consoleElem.innerHTML += '<br />' + '';
    classes.forEach(classData => {
        consoleElem.innerHTML += '<br />' + 'className : ' + classData.className + ",  probability : " + classData.probability;
    });
}

// imagefile에 image가 로드되면 image태그에 즉시 나타나게 하기위한 이벤트
// image태그에 입력한 이미지를 로드하고, 즉시 prediction 진행
document.getElementById('imagefile').onchange = function (evt) {
    const img = document.getElementById('img');
    img.style = "width: 300px;"

    var tgt = evt.target || window.event.srcElement,
        files = tgt.files;

    // fileReader를 통해 file엘리먼트의 파일을 읽어온다.
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        // load가 되면 image태그에 읽어온 결과를 출력함.
        fr.onload = function () {
            document.getElementById('img').src = fr.result;
        }
        fr.readAsDataURL(files[0]);

        app();
    } else {
        alert('파일을 다시 업로드 해주세요.');
        location.reload();
    }
}