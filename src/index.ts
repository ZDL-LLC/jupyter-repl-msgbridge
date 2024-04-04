import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the msgbridge extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'msgbridge:plugin',
  description: 'A JupyterLab extension that output to parent document',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension msgbridge is activated!');
  }
};

export default plugin;
