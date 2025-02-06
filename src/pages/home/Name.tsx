import React from "react";
import { motion } from "framer-motion";

interface NameProps {
  name: string;
}

const Name: React.FC<NameProps> = ({ name }) => {
  return (
    <div className="flex space-x-1">
      {name.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          //   animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          whileHover={{ scale: 1.2, y: 100 }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default Name;
