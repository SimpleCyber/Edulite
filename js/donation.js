var $form = $('.donations__form')
var $input = $('.donations__input')
var $sumbit = $('.donations__submit')
var $reset = $('.donations__reset')
var $progress = $('.donations__amount')
var $donors = $('.donations__donors')
var $progressBar = $('.donations__progress-bar')

var numDonors = 0;
var amountDonated = 0;
var goal = 75000;

$form.on('submit', function (e) {
  // Stop form default behavior
  e.preventDefault();
  
  // Get donation amount
  var donation = parseInt($input.val());
  var percentage;
  
  // Update State
  numDonors += 1;
  amountDonated += donation;
  percentage = 100 - ((amountDonated / goal) * 100)
  
  // Update DOM
  $donors.text(numDonors)
  $progress.text(amountDonated.toLocaleString())
  
  if (amountDonated >= goal) {
    $progressBar.css({
      'background': '#1cbc2c',
      'transform': 'none'
    })
  }
  $progressBar.css(
    'transform',
    `translate3D(-${percentage}%, 0, 0)`
  )
  
})

$reset.on('click', function (e) {
  e.preventDefault()
  
  // Reset State
  numDonors = 0;
  amountDonated = 0;
  
  // Reset DOM
  $donors.text(numDonors)
  $progress.text(amountDonated.toLocaleString())
  $progressBar.css({
    'background': 'orange',
    'transform': 'translate3D(-100%, 0, 0)'
  })
})


