<?php
/**
 * Plugin Name:     Advanced HTML Editor Blocks
 * Plugin URI:      https://github.com/blocktech-lab/advanced-html-editor-blocks
 * Description:     Advanced HTML Editor Blocks.
 * Author:          Blocktech Lab
 * Author URI:      https://blocktech.dev
 * Text Domain:     advanced-html-editor-blocks
 * Domain Path:     /languages
 * Version:         0.2.1
 *
 * @package         Advanced_Html_Editor_Blocks
 */

namespace Advanced_Html_Editor_Blocks;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
/**
 * Plugin file path.

 * @type string
 */
const PLUGIN_FILE = __FILE__;

/**
 * Get plugin information.
 *
 * @return array {
 *     Array of plugin information for the strings.
 *
 *     @type string $Name        Plugin mame.
 *     @type string $PluginURI   Plugin URL.
 *     @type string $Version     Version.
 *     @type string $Description Description.
 *     @type string $Author      Author name.
 *     @type string $AuthorURI   Author URL.
 *     @type string $TextDomain  textdomain.
 *     @type string $DomainPath  mo file dir.
 *     @type string $Network     Multisite.
 * }
 */
function get_plugin_data() {
	static $data = null;
	if ( empty( $data ) ) {
		$data = \get_file_data(
			__FILE__,
			[
				'Name'        => 'Plugin Name',
				'PluginURI'   => 'Plugin URI',
				'Version'     => 'Version',
				'Description' => 'Description',
				'Author'      => 'Author',
				'AuthorURI'   => 'Author URI',
				'TextDomain'  => 'Text Domain',
				'DomainPath'  => 'Domain Path',
				'Network'     => 'Network',
			]
		);
	}

	return $data;
}

require_once dirname( __FILE__ ) . '/src/init.php';
