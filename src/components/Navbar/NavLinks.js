import { motion } from "framer-motion";

export default function NavLinks(props) {

  const animateFrom = { opacity: 0, y: -15 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <>
        <motion.h2
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.2 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          O nas
        </motion.h2>

      <motion.h2
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        Praca
      </motion.h2>

      <motion.h2
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        Kontakt
      </motion.h2>


        <motion.h2
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.2 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          Blog
        </motion.h2>


        <motion.h2
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.3 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          GitHub
        </motion.h2>

      <motion.h2
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.4 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        Contact
      </motion.h2>
    </>
  );
}
