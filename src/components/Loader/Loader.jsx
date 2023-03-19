import styled from './LOader.module.css';
export const Loader = () => {
  return (
    <>
      <div className={styled.gearbox}>
        <div className={styled.overlay}></div>
        <div className={(styled.gear, styled.one)}>
          <div className={styled.gear_inner}>
            <div className={styled.bar}></div>
            <div className={styled.bar}></div>
            <div className={styled.bar}></div>
          </div>
        </div>
        <div className={(styled.gear, styled.two)}>
          <div className={styled.gear_iner}>
            <div className={styled.bar}></div>
            <div className={styled.bar}></div>
            <div className={styled.bar}></div>
          </div>
        </div>
        <div className={(styled.gear, styled.three)}>
          <div className={styled.gear_inner}>
            <div className={styled.bar}></div>
            <div className={styled.bar}></div>
            <div className={styled.bar}></div>
          </div>
        </div>
        <div className={(styled.gear, styled.for)}>
          <div className={styled.gear_inner}>
            <div className={styled.bar}></div>
            <div className={styled.bar}></div>
            <div className={styled.bar}></div>
            <div className={styled.bar}></div>
            <div className={styled.bar}></div>
            <div className={styled.bar}></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Loader;
