module.exports = {
  variants: ['responsive'],
  plugins: [
     function ({ addVariant, e }) {
       addVariant('text-border', ({ modifySelectors, separator }) => {
         modifySelectors(({ className }) => {
           return `.${e(`text-border${separator}${className}`)}:before, .${e(`text-border${separator}${className}`)}:after {
               content: "";
               position: absolute;
               width: 100%;
               height: 100%;
               border: 1px solid;
               pointer-events: none;
             }`;
         });
       });
     },
  ],
 }