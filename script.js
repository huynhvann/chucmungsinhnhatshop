    function scrollToSection() {
      document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
    }
    function showMessage() {
      const msg = document.getElementById('hiddenMessage');
      msg.style.display = 'block';
    }

    const starContainer = document.getElementById('star-container');
    for (let i = 0; i < 50; i++) {
      let star = document.createElement('span');
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDuration = (Math.random() * 3 + 2) + 's';
      starContainer.appendChild(star);
    }

    const heartContainer = document.getElementById('heart-container');
    const hearts = ['🎂 ','🎁','🎉','🎈','🎊'];/**['💖','💗','💘','💕','💞'];**/
    for (let i = 0; i < 20; i++) {
      const span = document.createElement('span');
      span.innerText = hearts[Math.floor(Math.random() * hearts.length)];
      span.style.left = Math.random() * 100 + '%';
      span.style.animationDuration = (Math.random() * 5 + 3) + 's';
      span.style.top = '-' + Math.random() * 20 + 'px';
      heartContainer.appendChild(span);
    }
    const audio = document.getElementById('mainAudio');
    const songs = [
      "img/Ed Sheeran - Perfect (Official Music Video).mp3",
      "img/Jessie J - Flashlight (from Pitch Perfect 2) (Official Video) - JessieJVEVO.mp3",
      "img/Bruno Mars - Just The Way You Are (Official Music Video).mp3",
      "img/Christina Perri - A Thousand Years [Official Music Video].mp3",
      "img/Vietsub - HUSH OF SUNSET - 10 CM   __ Our Unwritten Seoul OST Part 02_  Một Seoul Chưa Biết Đến.mp3",
      "img/宇多田ヒカル - First Love.mp3",
      "img/Novelbright - 愛結び [Official Music Video] - Novelbright.mp3"
    ];

    function playSong(index) {
      audio.src = songs[index];
      audio.play();
    }
 let i = 0;
let typingTimer = null;

const message = `Chúc mừng sinh nhật em!

Chúc em tuổi mới luôn cười thật tươi, sống trọn vẹn với những gì mình yêu và luôn cảm thấy bình yên trong lòng - như chính cách em mang bình yên đến cho anh =))).
Cảm ơn em vì đã hiện diện và làm thế giới này trở nên dịu dàng hơn.
Anh không biết năm nay em sẽ ước điều gì... nhưng nếu được, anh chỉ mong mọi ước mơ của em đều trở thành hiện thực, mọi điều tốt đẹp sẽ đến bên em hôm nay và mãi về sau.

💫 Chúc em một sinh nhật ngập tràn niềm vui, yêu thương và thật nhiều may mắn!`;

function typeMessage() {
  const typedMessage = document.getElementById('typedMessage');
  if (i < message.length) {
    typedMessage.innerHTML += message.charAt(i);
    i++;
    typingTimer = setTimeout(typeMessage, 100);
  }
}

function showPopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'flex';
  popup.style.animation = 'fadeIn 1s ease';

  // Reset lại mọi thứ trước khi đánh lại
  clearTimeout(typingTimer);
  i = 0;
  document.getElementById('typedMessage').innerHTML = "";
  typeMessage();
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';

  clearTimeout(typingTimer);  
  i = 0;                      
  document.getElementById('typedMessage').innerHTML = "";
}


const hintText = "👉 Em click vào hình để nghe nha =)))";
let hintElement = document.getElementById("typingHint");

function loopTyping() {
  if (hintIndex <= hintText.length) {
    hintElement.innerHTML = hintText.slice(0, hintIndex);
    hintIndex++;
    setTimeout(loopTyping, 50);
  } else {
    hintIndex = 0;
    setTimeout(loopTyping, 800); // nghỉ 0.8 giây trước khi lặp
  }
}
loopTyping();
    
function showRatingMessage() {
    const value = document.getElementById("rating-select").value;

    const messages = {
      "Tuyệt": "🎀 Tuyệt tới mức em không biết phải nói gì nữa, chỉ muốn ôm! 🥺",
      "Rất đẹp": "🌷 Rất đẹp cảm ơn anh =)))",
      "Đủ wow": "🌟 Đủ wow rồi đó, cảm ơn anh nhèo =))))",
      "Không điểm chê": "💎 Không điểm chê thật hở 😏 anh xúc động quá!"
    };

    if (value) {
      Swal.fire({
        title: '💖 Cảm ơn em đã chọn💖',
        text: messages[value],
        icon: 'success',
        confirmButtonText: 'Hihi biết rùi nè 😊',
        confirmButtonColor: '#f48fb1',
        background: '#fff0f7',
        color: '#c94c9f'
      });
    }
  }
