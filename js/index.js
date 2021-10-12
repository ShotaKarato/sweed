const memberNames = document.querySelectorAll('.member-names__img');
const memberBubbles = document.querySelectorAll('.member-bubbles__bubble');

memberNames.forEach(name => {
  name.addEventListener('click', (e) => {
    const memberName = e.currentTarget.dataset.id;
    const selectedMember = document.getElementById(memberName);

    memberBubbles.forEach(bubble => {
      bubble.classList.add('hidden');
    });
    selectedMember.classList.remove('hidden');
  });
});