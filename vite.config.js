import { defineConfig } from 'vite';
import {siteUrl} from './site.config.js';

export default defineConfig(({command,isPreview}) => ({
  base: command === 'build' || isPreview ? siteUrl.pathname : '/',
}));
