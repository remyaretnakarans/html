$(function () {
  // scrollReveal();
  $('input[required]').each(function () {
    $(this).parent().find('label').addClass("required");
  });

  $('#institution_kids').on('change', function () {
    if (this.value == '2') {
      $(".toshowByInst").show();
      $(".tohideByInst").hide();
    } else {
      $(".tohideByInst").show();
      $(".toshowByInst").hide();
    }
  });
});




$(".btn-next").on("click", function () {
  // ScrollReveal().destroy();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  // scrollReveal();
  var currentStepNum = $("#checkout-progress").data("current-step");
  var nextStepNum = currentStepNum + 1;
  var currentStep = $(".step.step-" + currentStepNum);
  var nextStep = $(".step.step-" + nextStepNum);
  var progressBar = $("#checkout-progress");
  $(".btn-prev").removeClass("disabled");
  $("#section" + currentStepNum).toggle();
  $("#section" + nextStepNum).toggle();
  if (nextStepNum == 3) {
    $(this).toggle();
    $(".btn-submit").toggle();
  }
  /*if(nextStepNum == 5){
        $(this).addClass('disabled');
    }*/
  $(".checkout-progress")
    .removeClass(".step-" + currentStepNum)
    .addClass(".step-" + (currentStepNum + 1));

  currentStep.removeClass("active").addClass("valid");
  currentStep.find("span").addClass("opaque");
  currentStep.find(".fa.fa-check").removeClass("opaque");

  nextStep.addClass("active");
  progressBar
    .removeAttr("class")
    .addClass("step-" + nextStepNum)
    .data("current-step", nextStepNum);
});

$(".btn-submit").on("click", function () {
  $(".btn-prev").toggle();
  var currentStepNum = $("#checkout-progress").data("current-step");
  var nextStepNum = currentStepNum + 1;
  var currentStep = $(".step.step-" + currentStepNum);
  var nextStep = $(".step.step-" + nextStepNum);
  var progressBar = $("#checkout-progress");
  $(".btn-prev").removeClass("disabled");
  $("#section" + currentStepNum).toggle();
  $("#section" + nextStepNum).toggle();

  $(".checkout-progress")
    .removeClass(".step-" + currentStepNum)
    .addClass(".step-" + (currentStepNum + 1));

  currentStep.removeClass("active").addClass("valid");
  currentStep.find("span").addClass("opaque");
  currentStep.find(".fa.fa-check").removeClass("opaque");

  nextStep.addClass("active");
  progressBar
    .removeAttr("class")
    .addClass("step-" + nextStepNum)
    .data("current-step", nextStepNum);
  $(".btn-submit").toggle();
  iconAnime();
});

$(".btn-prev").on("click", function () {

  var currentStepNum = $("#checkout-progress").data("current-step");
  var prevStepNum = currentStepNum - 1;
  var currentStep = $(".step.step-" + currentStepNum);
  var prevStep = $(".step.step-" + prevStepNum);
  var progressBar = $("#checkout-progress");
  $(".btn-next").removeClass("disabled");
  $("#section" + currentStepNum).toggle();
  $("#section" + prevStepNum).toggle();
  if (currentStepNum == 3) {
    $(".btn-submit").toggle();
    $(".btn-next").toggle();
  }
  if (currentStepNum == 1) {
    return false;
  }
  if (prevStepNum == 1) {
    $(this).addClass("disabled");
  }
  $(".checkout-progress")
    .removeClass(".step-" + currentStepNum)
    .addClass(".step-" + prevStepNum);

  currentStep.removeClass("active");
  prevStep.find("span").removeClass("opaque");
  prevStep.find(".fa.fa-check").addClass("opaque");

  prevStep.addClass("active").removeClass("valid");
  progressBar
    .removeAttr("class")
    .addClass("step-" + prevStepNum)
    .data("current-step", prevStepNum);
});

//selecting all required elements
const dropArea = document.querySelector(".drag-area"),
  dragText = dropArea.querySelector(".header_drag"),
  button = dropArea.querySelector(".browse_btn"),
  input = dropArea.querySelector(".input_browse");
let file; //this is a global variable and we'll use it inside multiple functions

button.onclick = () => {
  input.click(); //if user click on the button then the input also clicked
};

input.addEventListener("change", function () {
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = this.files[0];
  dropArea.classList.add("active");
  showFile(); //calling function
});

//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event) => {
  event.preventDefault(); //preventing from default behaviour
  dropArea.classList.add("active");
  dragText.textContent = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("active");
  dragText.textContent = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea.addEventListener("drop", (event) => {
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = event.dataTransfer.files[0];
  showFile(); //calling function
});

function showFile() {
  let fileType = file.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if (validExtensions.includes(fileType)) {
    //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = () => {
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      // UNCOMMENT THIS BELOW LINE. I GOT AN ERROR WHILE UPLOADING THIS POST SO I COMMENTED IT
      let imgTag = `<img src="${fileURL}" alt="image">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
    };
    fileReader.readAsDataURL(file);
  } else {
    alert("This is not an Image File!");
    dropArea.classList.remove("active");
    // dragText.textContent = "Drag & Drop to Upload File";
  }
}


// =========== Select with Social icon start ============

var langArray = [];
$('.select_social option').each(function () {
  var img = $(this).attr("data-thumbnail");
  var text = this.innerText;
  var value = $(this).val();
  var item = '<li><img src="' + img + '" alt="" value="' + value + '"/><span>' + text +
    '</span></li>';
  langArray.push(item);
})

$('#a').html(langArray);

//Set the button value to the first el of the array
$('.btn-select').html(langArray[0]);
$('.btn-select').attr('value', 'en');

//change button stuff on click
$('#a li').click(function () {
  var img = $(this).find('img').attr("src");
  var value = $(this).find('img').attr('value');
  var text = this.innerText;
  var item = '<li><img src="' + img + '" alt="" /><span>' + text + '</span></li>';
  $('.btn-select').html(item);
  $('.btn-select').attr('value', value);
  $(".b").toggle();
  //console.log(value);
});

$(".btn-select").click(function () {
  $(".b").toggle();
});

//check local storage for the lang
var sessionLang = localStorage.getItem('lang');
if (sessionLang) {
  //find an item with value of sessionLang
  var langIndex = langArray.indexOf(sessionLang);
  $('.btn-select').html(langArray[langIndex]);
  $('.btn-select').attr('value', sessionLang);
} else {
  var langIndex = langArray.indexOf('ch');
  $('.btn-select').html(langArray[langIndex]);
  //$('.btn-select').attr('value', 'en');
}



// =========Submit icon animation ======== 

function iconAnime() {


  var logoTimeline = anime.timeline({
    autoplay: true,
    direction: 'alternate',
    loop: false
  });

  logoTimeline
    .add({
      targets: '.checkmark',
      scale: [{
        value: [0, 1],
        duration: 600,
        easing: 'easeOutQuad'
      }]
    })
    .add({
      targets: '.check',
      strokeDashoffset: {
        value: [anime.setDashoffset, 0],
        duration: 700,
        delay: 200,
        easing: 'easeOutQuart'
      },
      translateX: {
        value: [6, 0],
        duration: 700,
        delay: 200,
        easing: 'easeOutQuart'
      },
      translateY: {
        value: [-2, 0],
        duration: 700,
        delay: 200,
        easing: 'easeOutQuart'
      },
      offset: 0
    });
}

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      document.getElementById('checkout-progress').classList.add('fixed-top_');
      // add padding top to show content behind navbar
      // navbar_height = document.querySelector('.progress_section').offsetHeight;
      // document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('checkout-progress').classList.remove('fixed-top_');
      // remove padding top from body
      document.body.style.paddingTop = '0';
    }
  });
});

/*===== SCROLL REVEAL ANIMATION =====*/
function scrollReveal() {


  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000,
    delay: 200,
    reset: true
  });
  sr.reveal(
    ".side_main_title, .side_sub_title, .side_main_title2", {}
  );
  sr.reveal(".employee_details , .drag-area, .input_field, .input_field2", {
    delay: 400,
  });


}