export default function () {
  const pageContent = document.querySelector('.page-content');
  pageContent.innerHTML = '';
  const div = document.createElement('div');
  div.className = 'columns is-centered';
  const contactCard = `
    <div class="column is-half">
      <div class="content has-text-centered">
        <p><strong>Contact us and make your reservation!</strong></p>
        <br>
        <p>reservations@thefrenchcorner.com</p>
        <br>
        <p>(610)458-0892</p>
        <br>
        <p>8108 Landis Ave Sea Isle City, New Jersey(NJ), 08243</p>
      </div>
    </div>`;
  div.insertAdjacentHTML('beforeend', contactCard);
  pageContent.appendChild(div);
}
