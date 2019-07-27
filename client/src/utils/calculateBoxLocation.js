const calculateBoxLocation = (data, id) => {
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
  const image = document.getElementById(id);
  const width = Number(image.width);
  const height = Number(image.height);
  console.log(width, height);
  let box = {
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width - clarifaiFace.right_col * width,
    bottomRow: height - clarifaiFace.bottom_row * height
  };
  return box;
};

export default calculateBoxLocation;
