var slideshow = {
  photoList: ["photo1", "photo2", "photo3", "photo4", "photo5"],
  currentPhotoIndex: 0,
  nextPhoto: function () {
    if (this.currentPhotoIndex == this.photoList.length - 1) {
      console.log("End of Slideshow");
    } else {
      this.currentPhotoIndex++;
      console.log(this.photoList[this.currentPhotoIndex]);
    }
  },
  prevPhoto: function () {
    if (this.currentPhotoIndex == 0) {
      console.log("End of Slideshow");
    } else {
      this.currentPhotoIndex--;
      console.log(this.photoList[this.currentPhotoIndex]);
    }
  },
  getCurrentPhoto: function (currentPhotoIndex) {
    return currentPhotoIndex;
  },
};
