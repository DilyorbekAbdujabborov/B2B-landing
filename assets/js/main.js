let feedback__listEL = document.querySelector(".feedback__list")
const feedbacks = [
  'You made it so simple. My new site is so much faster and easier to work with than my old site.',
  'I love the simplicity of the design and the ease of use. It has made my work so much more efficient.',
  "The team was incredibly helpful and responsive. I couldn't be happier with the results.",
  'This service has exceeded my expectations. I highly recommend it to anyone looking for a reliable solution.',
  'The user interface is intuitive and user-friendly. It has made my workflow much smoother and more enjoyable.',
  'I appreciate the attention to detail and the quality of the work. It shows a true commitment to excellence.',
  'The support team was fantastic. They answered all my questions and provided valuable guidance throughout the process.',
  'I am impressed with the speed and efficiency of the service. It has saved me a lot of time and effort.',
  'The customization options are great. I was able to tailor the solution to fit my specific needs perfectly.',
  'Overall, I am extremely satisfied with the service. It has made a significant positive impact on my business.',
  'The pricing is transparent and fair. No hidden costs or surprises.',
  'Integration was seamless and hassle-free. Great documentation and support.',
  'The platform scales well as our business grows. Very impressed with the performance.',
  'Best decision we made this year. Highly recommend to other businesses.',
  'The analytics dashboard provides valuable insights. Helps us make better decisions.',
  'Customer support goes above and beyond. Always willing to help and find solutions.',
  'The updates and new features keep getting better. They listen to user feedback.',
  'Reliable and consistent uptime. We can always count on it for our operations.',
  'The learning curve was minimal. Our team was productive from day one.',
  'Outstanding value for money. Worth every penny and more.'
];

function renderUI(data) {
  feedback__listEL.innerHTML += `
<li class="feedback__item">
  <figure>
    <img
      loading="lazy"
      src="${data.src}"
      alt="${data.alt}"
      class="feedbacker__img"
      width="54"
      height="54"
    />
  </figure>

  <p class="feedback__text">
    “${data.text}”
  </p>

  <div class="feedback__person">
    <h2 class="feedbacker__name">${data.name}</h2>
    <p class="feedbacker__position">${data.position}</p>
  </div>
</li>
`}


async function fetchFeedback() {
  const count = 2
  const res = await fetch('https://randomuser.me/api?results=' + count)
  const data = await res.json()

  data.results.forEach((user) => {
    renderUI({
      src: user.picture.medium,
      name: user.name.first + ' ' + user.name.last,
      text: feedbacks[Math.floor(Math.random() * feedbacks.length)],
      alt: user.name.first + "'s feedback",
      position: 'Client'
    })
  })
}


fetchFeedback()