// Builds one .game-card per entry in GAMES (see games.js) and injects them
// into the #more-games-grid container. No screenshot strip, per request —
// each card still has cover art, price, rating, tags, spec HUD, and a comment.

function renderGameCard(game) {
  const specs = game.specs;
  return `
    <article class="game-card">
      <div class="card-cover">
        <img src="${game.cover}" alt="${game.title} cover art" loading="lazy">
        <span class="price-tag">${game.price}</span>
      </div>

      <div class="card-body">
        <div class="card-heading">
          <h3>${game.title}</h3>
          <span class="rating">★ ${game.rating}</span>
        </div>
        <p class="card-tags"> 
          <span class="tag tag-small">${game.tag1}</span>
          <span class="tag tag-small">${game.tag2}</span>
        </p>
        <p class="card-desc">${game.desc}</p>

        <div class="spec-hud">
          <p class="spec-label">// SYSTEM REQUIREMENTS (SAMPLE — EDIT ME)</p>
          <div class="spec-row">
            <span class="spec-key">CPU</span>
            <span class="spec-val">${specs.cpu}</span>
            <div class="spec-bar"><div class="spec-fill" style="width:${specs.cpuBar}%"></div></div>
          </div>
          <div class="spec-row">
            <span class="spec-key">GPU</span>
            <span class="spec-val">${specs.gpu}</span>
            <div class="spec-bar"><div class="spec-fill" style="width:${specs.gpuBar}%"></div></div>
          </div>
          <div class="spec-row">
            <span class="spec-key">RAM</span>
            <span class="spec-val">${specs.ram}</span>
            <div class="spec-bar"><div class="spec-fill" style="width:${specs.ramBar}%"></div></div>
          </div>
          <div class="spec-row">
            <span class="spec-key">STORAGE</span>
            <span class="spec-val">${specs.storage}</span>
            <div class="spec-bar"><div class="spec-fill" style="width:${specs.storBar}%"></div></div>
          </div>
        </div>

        <div class="card-footer">
          <a href="${game.steamUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-small">Find on Steam ↗</a>
        </div>

        <div class="comments">
          <p class="comments-label">// PLAYER LOG</p>
          <div class="comment">
            <span class="comment-user">${game.comment.user}</span>
            <p>${game.comment.text}</p>
          </div>
          <button class="btn-add-comment">+ Add comment</button>
        </div>
      </div>
    </article>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("more-games-grid");
  if (!grid || typeof GAMES === "undefined") return;
  grid.innerHTML = GAMES.map(renderGameCard).join("");
});