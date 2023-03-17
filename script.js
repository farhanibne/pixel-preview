const root = ReactDOM.createRoot(document.getElementById("root"));

const ImageBox = () => {
  const { useState, useCallback } = React;
  const [value, setValue] = useState(50);

  const onChangeCallback = useCallback(e => {
    setValue(e.target.value);
  }, []);

  return /*#__PURE__*/(
    React.createElement("div", { className: "image-box", style: { "--current-value": value } }, /*#__PURE__*/
    React.createElement("img", {
      className: "image image-1",
      src: "https://i.ibb.co/1K8nC7j/151-BF0-AF-047-E-4-FBD-A268-E61-EE7-D91-EF3.jpg",
      alt: "" }), /*#__PURE__*/

    React.createElement("img", {
      className: "image image-2",
      src: "https://i.ibb.co/7zbbKc7/6-A41-EED5-8-C85-4-D48-BB0-E-19-EA3-DA2-F008.jpg",
      alt: "" }), /*#__PURE__*/

    React.createElement("div", { className: "line-indicator" }), /*#__PURE__*/
    React.createElement("input", {
      className: "slicer",
      type: "range",
      value: value,
      min: 0,
      max: 100,
      onChange: onChangeCallback })));



};

root.render( /*#__PURE__*/React.createElement(ImageBox, null));