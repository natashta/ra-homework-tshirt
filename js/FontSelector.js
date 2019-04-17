const FontSelector = ({fonts, selectedFont, onSelect}) => {
    if (fonts.length === 0) return null;
    return (
        <div className="font-picker">
          {fonts.map((item, index) => {
        return (
          <div className='grid center font-item' key={index}>
            <input
              type='radio'
              name='font'
              value={item.name} id={item.name}
              onChange={() => onSelect(item)} />
            <label htmlFor={item.name} class='grid-1'>
              <PictureFont text='abc' path={item.path} /> 
            </label>
          </div>
        );
      })} 
        </div>
    )
};
   
