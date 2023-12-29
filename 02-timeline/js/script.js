window.addEventListener("load", () => {
  //여러 요소를 내가 원하는 시간에 맞게 애니메이션 시키겠다.

  const tl = gsap.timeline();
  tl.from(".box1", { opacity: 0, y: -100 }, 1) //1초 후의 의미 (나머지 애들도 1초씩 같이 밀림)
    .from(".box2", { opacity: 0, scale: 2, rotation: 180 }, 0) //앞 순서 애니메이션과 관계 없이 시간 값 주면 그것을 우선시 하여 시작한다.
    .to(".box3", { scale: 1.5, rotation: 90 })
    .from(".box4", { opacity: 0, y: 50, rotation: 180 }, "-=0.5") //원래 플레이 되어야 하는 시간보다 0.5초 빠르게 시작
    .from(".box5", { opacity: 0, x: 100, ease: "power4.inOut" }, "<"); //이전 애니메이션의 시작지점에서 시작하라(4=5)
});
