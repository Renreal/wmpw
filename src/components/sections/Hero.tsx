import "../../assets/css/Hero.css";
import OnscrollReveal from "../templates/OnscrollReveal";''
function Hero() {
  return (
    <OnscrollReveal  distance={150}
    direction="vertical"
    reverse={false}
    config={{ tension: 50, friction: 20 }}
    initialOpacity={0.0}
    animateOpacity
    scale={1.1}
    threshold={0.2}
    >
    <div className="hero-component">
      <div className="hero-text-container">
        <div className="box1">
         <span className="p-text">P</span><span className="hero-h3-1">RIVATE</span>
        </div>
        <div className="box2">
          <span className="hero-span">WEALTH</span>
        </div>
        <div className="box3">
          <h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, aliquam distinctio veniam deleniti nam vel
          </h3>
        </div>
        <div className="box4">
          <h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
            accusantium officiis eligendi aliquam cumque rerum quis, reiciendis
            voluptas doloribus quam ad culpa maxime molestiae atque distinctio
            repellendus, obcaecati odio optio!
          </h3>
        </div>
      </div>
    </div>
    </OnscrollReveal>
  );
}

export default Hero;
