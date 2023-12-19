const REGEXP = Object.freeze({
  monthAndWeek: /^[1-9][0-9]?,[가-힣]*$/,
  order: /^[가-힣]{1,5}(,[가-힣]{1,5})*$/,
});

export default REGEXP;
