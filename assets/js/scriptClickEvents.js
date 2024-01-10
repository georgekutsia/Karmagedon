
// const practiceGame = new GameTrain(ctx)
canvas.addEventListener('click', playerClick);

function playerClick(event) {
  const rect = canvas.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const clickY = event.clientY - rect.top;

  if (
    clickX >= game.player.x &&
    clickX <= game.player.x + game.player.w &&
    clickY >= game.player.y &&
    clickY <= game.player.y + game.player.h
  ) {
    showPlayerWeaponStats = !showPlayerWeaponStats;
  }
}
canvas.addEventListener('click', officeClick);

// office click

function officeClick(event) {
  const rect = canvas.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const clickY = event.clientY - rect.top;
  if (
    clickX >= 1200 &&
    clickX <= 1200 + 190 &&
    clickY >= 200 &&
    clickY <= 200 + 130
  ) {
        showPlayerJoBStats = !showPlayerJoBStats;
  }}
// body tocken click
canvas.addEventListener('click', bodyTockenClick);
function bodyTockenClick(event) {
  const rect = canvas.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const clickY = event.clientY - rect.top;
  if (
    clickX >= -30 &&
    clickX <= -30 + 130 &&
    clickY >= 800 &&
    clickY <= 800 + 130
  ) {
    showPlayerPhysicalStats = !showPlayerPhysicalStats;
  }}


// shotgun info  click
canvas.addEventListener('click', shotgunInfoClick);
function shotgunInfoClick(event) {
  const rect = canvas.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const clickY = event.clientY - rect.top;
  if (
    clickX >= game.player.x - 20 &&
    clickX <= game.player.x - 20 + game.player.w &&
    clickY >= game.player.y + 45 &&
    clickY <= game.player.y + 45 + game.player.h + 5 && destroyerLeveling >=3
  ) {
  }}
// rocket info  click
canvas.addEventListener('click', rocketInfoClick);
function rocketInfoClick(event) {
  const rect = canvas.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const clickY = event.clientY - rect.top;
  if (
    clickX >= game.player.x + 10 &&
    clickX <= game.player.x + 10 + game.player.w &&
    clickY >= game.player.y + 51 &&
    clickY <= game.player.y + 31 + game.player.h  && destroyerLeveling >=3
  ) {
  }}


// hook info  click
canvas.addEventListener('click', hookInfoClick);
function hookInfoClick(event) {
  const rect = canvas.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const clickY = event.clientY - rect.top;
  if (
    clickX >= game.player.x + 29 &&
    clickX <= game.player.x + 29 + game.player.w &&
    clickY >= game.player.y + 10 &&
    clickY <= game.player.y + 10 + game.player.h  && hookLeveling >= 1
  ) {
    
  }}


// explosive info  click
canvas.addEventListener('click', explosiveInfoClick);
function explosiveInfoClick(event) {
  const rect = canvas.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const clickY = event.clientY - rect.top;
  if (
    clickX >= game.player.x - 35 &&
    clickX <= game.player.x - 35 + game.player.w &&
    clickY >= game.player.y + 45 &&
    clickY <= game.player.y + 45 + game.player.h  && elementalistLeveling >= 2
  ) {
  }}

  
// mine info  click
canvas.addEventListener('click', mineInfoClick);
function mineInfoClick(event) {
  const rect = canvas.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const clickY = event.clientY - rect.top;
  if (
    clickX >= game.player.x + 20 &&
    clickX <= game.player.x + 20 + game.player.w &&
    clickY >= game.player.y + 45 &&
    clickY <= game.player.y + 45 + game.player.h  && elementalistLeveling >= 3
  ) {
  }}
