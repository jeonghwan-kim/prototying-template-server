(()=> {
  const TAG = '[main.js]'
  
  const onClick = () => alert('Clicked')

  document.addEventListener('DOMContentLoaded', () => {
    console.log(TAG, 'DOMContentLoaded')

    const clickMeBtn = document.querySelector('#btn');
    if (!clickMeBtn) return;
    clickMeBtn.addEventListener('click', onClick)
  })
})()
