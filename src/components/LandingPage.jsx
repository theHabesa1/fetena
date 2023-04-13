import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import Home from "./Home";
import Services from "./Services";
import Stats from "./Stats";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

const useStyles = makeStyles(() => ({
  section: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "50px 0",
  },
}));

const LandingPage = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  const classes = useStyles();

  return (
    <>
      <ScrollContainer>
        <div>
          <Header />
          <ScrollPage page={0}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <section className={classes.section}>
                <Home />
              </section>
            </Animator>
          </ScrollPage >
          <ScrollPage page={1}>
            <Animator animation={ZoomInScrollOut}>
              <section className={classes.section}>
                <Services />
              </section>
            </Animator>
          </ScrollPage>
          
          <section className={classes.section}>
            <Stats />
          </section>
        </div>
      </ScrollContainer>
    </>
  );
};

export default LandingPage;
