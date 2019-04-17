const TextRenderLine = ({value, onChange}) => {
  const changeText = (e) => {
    onChange(e.target.value.toLowerCase().replace(/([^\w\s]|\d)/g, ''));
  };
	return (
		<div className="type-text">
			<textarea name="text" id="font-text" cols="30" rows="2" placeholder="Введите текст для футболки" onChange={changeText}></textarea>
		</div>
	);
};
