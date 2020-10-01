const content = document.querySelector('#content');

export function createHeroLayout() {
  const section = document.createElement('section');
  section.className = 'hero is-fullheight has-bg-img';
  const heroContent = `  
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title has-text-white-ter">
              The French Corner
            </h1>
            <h2 class="subtitle has-text-white-ter">
              French Specialty Dishes
            </h2>
          </div>
        </div>

        <div class="hero-foot">
          <nav class="tabs is-boxed is-fullwidth">
            <div class="container">
              <ul>
                <li id="home-tab" class="is-active"><a id="home-link">Home</a></li>
                <li id="menu-tab"><a id="menu-link">Menu</a></li>
                <li id="contact-tab"><a id="contact-link">Contact</a></li>
              </ul>
            </div>
          </nav>
        </div>`;
  section.insertAdjacentHTML('beforeend', heroContent);
  content.appendChild(section);
}

export function createHomeContent() {
  const section = document.createElement('section');
  section.className = 'section';
  section.id = 'content-section';
  const div = document.createElement('div');
  div.className = 'container page-content';
  const description = `
    <div class="content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut risus posuere, commodo ligula rhoncus, dapibus turpis. Nunc mattis tincidunt turpis, a consequat nulla. Fusce sit amet erat at libero euismod maximus. Vivamus vel mi in mi maximus semper sit amet id odio. Sed commodo diam at mauris blandit, eu pulvinar massa commodo. Aliquam at metus nec metus ornare congue a ut purus. Donec id justo sit amet nunc accumsan finibus a ut quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur eleifend faucibus quam, non cursus turpis commodo at. In hac habitasse platea dictumst.

        Donec nec mi congue, euismod nisl at, congue mi. Integer finibus molestie velit, ut efficitur est lobortis vitae. Suspendisse bibendum sit amet orci sed congue. Nam vehicula, ante eu pulvinar varius, libero elit placerat sem, ac bibendum sem risus eget lectus. Nam iaculis hendrerit convallis. Phasellus maximus nec dolor et cursus. Sed accumsan tortor at eros egestas, ut hendrerit arcu bibendum. Praesent placerat tempus elit, at iaculis erat accumsan eget. Morbi elementum lacinia tortor, ut feugiat nulla venenatis a.

        Proin vulputate, neque venenatis viverra pharetra, massa massa pulvinar velit, ut elementum risus dolor at sem. Nulla commodo porttitor augue eget tristique. Cras eu augue eros. Duis urna massa, dictum bibendum tempor sed, tincidunt eget ex. Nullam a metus et purus lobortis porta id sit amet purus. Ut quis tempor ipsum. Nunc lacus quam, bibendum ut tempus vel, molestie sit amet felis. Morbi nec tortor a odio ullamcorper pretium. Quisque quis blandit magna. Pellentesque eu lacus neque. Vivamus tincidunt, ante scelerisque accumsan eleifend, quam enim rhoncus eros, a iaculis nibh lorem ultricies lorem.
      <p>
    </div>`;
  div.insertAdjacentHTML('beforeend', description);
  section.appendChild(div);
  content.appendChild(section);
}
