document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".footer")) return;

  const wrapper = document.createElement("footer");
  wrapper.className = "footer";
  wrapper.innerHTML = `
    <div class="container-xl section-padding">
      <nav class="footer__menu">
        <div class="footer-col">
          <h3>Extra</h3>
          <ul>
            <li><a href="https://tyk.io/company/"  target="_blank" rel="noopener">About Tyk</a></li>
            <li><a href="https://tyk.io/blog/"     target="_blank" rel="noopener">Blog</a></li>
            <li><a href="https://tyk.io/current-vacancies/" target="_blank" rel="noopener">Careers</a></li>
            <li><a href="https://tyk.io/pricing-cloud/" target="_blank" rel="noopener">Pricing</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>Help</h3>
          <ul>
            <li><a href="https://status.tyk.io/" target="_blank" rel="noopener">Cloud Status</a></li>
            <li><a href="https://github.com/TykTechnologies/tyk/" target="_blank" rel="noopener">Raise Bug</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>Social</h3>
          <nav class="footer__social">
            <a class="icon-social-github"   href="https://github.com/TykTechnologies" target="_blank" rel="noopener"></a>
            <a class="icon-social-postman"  href="https://www.postman.com/tyk-technologies/workspace/tyk-public-workspace/overview" target="_blank" rel="noopener"></a>
            <a class="icon-social-linkedin" href="https://www.linkedin.com/company/tyk/" target="_blank" rel="noopener"></a>
            <a class="icon-social-twitter"  href="https://twitter.com/tyk_io" target="_blank" rel="noopener"></a>
            <a class="icon-social-facebook" href="https://www.facebook.com/Tyk.API.Management/" target="_blank" rel="noopener"></a>
            <a class="icon-social-podcast"  href="https://tyk.io/all-about-apis-podcast/" target="_blank" rel="noopener"></a>
          </nav>
        </div>
      </nav>

      <nav class="footer__nav-legal">
        <ul>
          <li><a class="legal"  href="https://tyk.io/terms-conditions/" target="_blank" rel="noopener">
            <small class="footer__copyright">© Tyk Technologies, ${new Date().getFullYear()}</small></a></li>
          <li><a href="https://tyk.io/terms-conditions/"          target="_blank" rel="noopener">Terms & Conditions</a></li>
          <li><a href="https://tyk.io/privacy-policy/"            target="_blank" rel="noopener">Privacy Policy</a></li>
          <li><a href="https://tyk.io/gdpr/"                      target="_blank" rel="noopener">GDPR</a></li>
          <li><a href="https://app.zerocopter.com/en/cvd/261e0379-9eb8-4de6-b45d-48e30891a8bb"
                 target="_blank" rel="noopener">Responsible Disclosure</a></li>
        </ul>
      </nav>
    </div>
  `;

  document.body.appendChild(wrapper);
});
