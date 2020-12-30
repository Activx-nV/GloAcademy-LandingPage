const getTeamImages = () => {
    const teamPhotos = document.querySelectorAll('.command__photo');
    teamPhotos.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.src = item.dataset.img;
        });
    });
    teamPhotos.forEach((item, index) => {
        item.addEventListener('mouseout', () => {
            item.src = `images/command/command-${index + 1}.jpg`;
        });
    });
};

export default getTeamImages;
