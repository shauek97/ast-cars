import { motion } from "framer-motion";

export default function NavLinks(props) {

  const animateFrom = { opacity: 0, y: -15 };
  const animateTo = { opacity: 1, y: 0 };

  const getToAbout = () => {
    const element = document.getElementById("about");
    element.scrollIntoView({ behavior: "smooth" });
    props.closeMobileMenu();
  };

  const getToWorkLook = () => {
    const element = document.getElementById("workLook");
    element.scrollIntoView({ behavior: "smooth" });
    props.closeMobileMenu();
  };

  const getToContact = () => {
    const element = document.getElementById("contact");
    element.scrollIntoView({ behavior: "smooth" });
    props.closeMobileMenu();
  };

  return (
    <>
        <motion.h2
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.02 }}
          onClick={getToAbout}
        >
          O nas
        </motion.h2>

      <motion.h2
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={getToWorkLook}
      >
        Warunki współpracy
      </motion.h2>

      <motion.h2
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        onClick={getToContact}
      >
        Kontakt
      </motion.h2>
    </>
  );
}
