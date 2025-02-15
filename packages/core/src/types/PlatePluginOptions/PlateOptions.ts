import { FunctionComponent } from 'react';
import { SPRenderElementProps } from '../SPRenderElementProps';
import { SPRenderLeafProps } from '../SPRenderLeafProps';
import { AnyObject } from '../utility/AnyObject';
import { DeserializeOptions } from './DeserializeOptions';
import { GetNodeProps, NodeProps } from './GetNodeProps';

/**
 * React component rendering a slate element or leaf.
 * @default DefaultElement | DefaultLeaf
 */
export type PlatePluginComponent = FunctionComponent<
  SPRenderElementProps | SPRenderLeafProps
>;

export interface PlatePluginOptions extends AnyObject {
  /**
   * Node properties to delete.
   */
  clear?: string | string[];

  /**
   * `Plate` maps each slate node to this component to render.
   */
  component?: PlatePluginComponent;

  /**
   * Default type of slate blocks.
   * @default 'p'
   */
  defaultType?: string;

  /**
   * `getElementDeserializer` and `getLeafDeserializer` options.
   */
  deserialize?: Partial<DeserializeOptions>;

  /**
   * `Plate` will pass its return value as a component prop `nodeProps`.
   * @see {@link GetNodeProps}
   */
  getNodeProps?: GetNodeProps;

  /**
   * If it's a function, its return value will override the component props.
   * If it's an object, it will override the component props.
   */
  overrideProps?: GetNodeProps | NodeProps;

  /**
   * Hotkeys to listen to trigger a plugin action.
   */
  hotkey?: string | string[];

  /**
   * Element or mark type.
   * @default plugin key
   */
  type: string;
}

/**
 * A unique key to store the plugin options by key.
 */
export type PluginKey = string;

/**
 * Plate options stored by plugin key.
 * Each plugin can access the options by its plugin key.
 *
 * @default {}
 * @see {@link PluginKey}
 */
export type PlateOptions = Record<PluginKey, PlatePluginOptions>;
