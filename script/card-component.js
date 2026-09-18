// This file stores your card HTML structure safely as a reusable string
export const cardBlueprint = `
  <div class="card">
    <!-- Orange left accent stripe -->
    <div class="accent-stripe"></div>
    
    <div class="card-content">
      <h3 class="card-title"></h3>
      <p class="card-text"></p>
      
      <!-- 3 Icon Buttons Container -->
      <div class="card-actions">
        <!-- Button 1: Star Plus -->
        <button class="icon-btn" aria-label="Add to Favorites">
          <svg viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-4.18 2.2L9 14.14 4 9.27l6.91-1.01L12 2z"/>
            <path d="M16 16h6M19 13v6" stroke-width="2.5" />
          </svg>
        </button>

        <!-- Button 2: Eye Plus -->
        <button class="icon-btn" aria-label="Add to Watchlist">
          <svg viewBox="0 0 24 24">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
            <path d="M16 17h6M19 14v6" stroke-width="2.5" />
          </svg>
        </button>

        <!-- Button 3: Clean Share -->
        <button class="icon-btn" aria-label="Share content">
          <svg viewBox="0 0 24 24">
            <circle cx="18" cy="5" r="3"/>
            <circle cx="6" cy="12" r="3"/>
            <circle cx="18" cy="19" r="3"/>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
`;
