exports.config = {
  namespace: 'sttestcomponents',
  generateDistribution: true,
  bundles: [
    { components: ['st-header', 'st-input'] }
  ]
};

exports.devServer = {
    root: 'www',
    watchGlob: '**/**'
}