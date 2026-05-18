import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function Pre(props) {
  return (
    <AnimatePresence>
      {props.load && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center"
        >
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-4 border-t-primary rounded-full"
            />
          </div>
          <motion.p
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mt-8 text-xs font-black uppercase tracking-[0.5em] text-slate-500"
          >
            Loading...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Pre;
