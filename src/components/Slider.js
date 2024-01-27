import React, { useState } from 'react';

function App(props) {
  const [activeID, setActiveID] = useState(0);
  const [wrapperStyle, setWrapperStyle] = useState({
    backgroundImage: `url('${props.data[0].img}')`,
  });
  const [panelStyle, setPanelStyle] = useState({
    background: props.data[0].colour,
  });
  const [buttonHover, setButtonHover] = useState(false);
  const [buttonStyle, setButtonStyle] = useState({ color: '#ffffff' });

  function changeActive(id) {
    setActiveID(id);
    setWrapperStyle({
      backgroundImage: `url('${props.data[id].img}')`,
    });
    setPanelStyle({
      backgroundColor: props.data[id].colour,
    });
  }

  function buttonColour() {
    if (!buttonHover) {
      setButtonHover(true);
      setButtonStyle({
        color: props.data[activeID].colour,
      });
    } else {
      setButtonHover(false);
      setButtonStyle({
        color: '#ffffff',
      });
    }
  }

  return (
    <section className="wrapper" style={wrapperStyle}>
      <Selectors data={props.data} activeID={activeID} changeActive={changeActive} />
      <Panel
        data={props.data[activeID]}
        panelStyle={panelStyle}
        buttonStyle={buttonStyle}
        buttonColour={buttonColour}
      />
    </section>
  );
}

function Panel(props) {
  return (
    <aside className="panel" style={props.panelStyle}>
      <h2 className="panel-header">{props.data.header}</h2>
      <p className="panel-info">{props.data.body}</p>
      <button
        className="panel-button"
        style={props.buttonStyle}
        onMouseEnter={props.buttonColour}
        onMouseLeave={props.buttonColour}
      >
        Read More
      </button>
    </aside>
  );
}

function Selectors(props) {
  function handleClick(e) {
    if (props.id !== props.activeID) {
      props.changeActive(props.id);
    } else {
      return;
    }
  }

  return (
    <div className="selectors">
      {props.data.map((item) => (
        <Selector
          key={item.id}
          id={item.id}
          handleClick={handleClick}
          changeActive={props.changeActive}
          activeID={props.activeID}
        />
      ))}
    </div>
  );
}

function Selector(props) {
  let componentClass = 'selector';
  if (props.activeID === props.id) {
    componentClass = 'selector active';
  }
  return <div className={componentClass} onClick={props.handleClick}></div>;
}

const data = [
  {
    id: 0,
    header: 'Gluten-free Bicycle',
    body: 'Chillwave knausgaard chambray flannel tumblr, narwhal microdosing blog...',
    colour: '#242846',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc1.jpg',
  },
  {
    id: 1,
    header: 'Post-ironic Disrupt',
    body: 'Swag biodiesel disrupt retro fashion, salvia food truck kitsch wolf DIY...',
    colour: '#ba9077',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc2.jpg',
  },
 
]