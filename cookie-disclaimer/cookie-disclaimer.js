(function () {
  const cookieName = 'cookie-consent';

  window.onload = () => {
    // create elements
    const body = document.querySelector('body');
    body.innerHTML += `
      <div id="cookie-disclaimer" class="hidden" >
      <span id="close">×</span>
      <p id="cookie-statement">
        We use cookies to give you the best online experience.
      </p>
      <p id="site-ownership">
        By using our website, you agree to the privacy policy ofUFX Europe (Reliantco Investments Ltd) regulated by the <a id="csec-page-link"
          href="#">Cyprus Securities Exchange</a> Commisions
      </p>
      <button title="Accept and Close" id="accept-button" type="submit">Accept and Close</button>
    </div>`;

    // style elements
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(`
      #cookie-disclaimer {
        box-sizing: border-box;
        width: 211px;
        border: 3px solid #F7C413;
        position: fixed;
        bottom: 0;
        right: 0;
        opacity: 1;
        transition: opacity 0.2s ease;
        display: flex;
        flex-direction: column;
        align-items: center;
        word-break: break-all;
        overflow-wrap: break-word;
        letter-spacing: 0.3px;
        line-height: 1.2;
        background: white;
        z-index: 1;
      }
  
      #cookie-disclaimer.hidden {
        opacity: 0;
      }
  
      #close {
        align-self: flex-end;
        padding-right: 8px;
        color: #A0A0A0;
        font-size: 22px;
        font-weight: 100;
      }
  
      #close:hover,
      #accept-button:hover {
        cursor: pointer;
      }
  
      #cookie-statement,
      #site-ownership {
        font-size: 10px;
        padding: 0 10px;
      }
  
      #cookie-statement {
        margin: 0;
      }
  
      #csec-page-link {
        color: #B8B8B8;
      }
  
      #accept-button {
        border: none;
        font-size: 12px;
        max-width: 100%; 
        text-overflow: ellipsis; 
        overflow: hidden;
        white-space: nowrap; 
        background: #F7C413;
        padding: 8px 20px;
        margin: 5px 0 20px;
      }`
    ));

    const head = document.getElementsByTagName('head')[0];
    head.appendChild(style);

    // create logic
    const cookiePopup = document.querySelector('#cookie-disclaimer');

    if (localStorage.getItem(cookieName) === null) {
      setTimeout(() => {
        cookiePopup.classList.remove('hidden');
      }, 1000)
    }

    cookiePopup.addEventListener('click', (ev) => {
      if (ev.target.id === 'accept-button') {
        localStorage.setItem(cookieName, 'accepted');
        cookiePopup.classList.add('hidden');
      } else if (ev.target.id === 'close') {
        cookiePopup.classList.add('hidden');
      }
    });

    const csecPageLink = document.querySelector('#csec-page-link');
    csecPageLink.addEventListener('click', (ev) => {
      window.open('https://www.cysec.gov.cy/en-GB/home/', '_blank');
    });
  };
})();
