<?php
/**
 * Initialize.
 *
 * @package Advanced_Html_Editor_Blocks
 */

namespace Advanced_Html_Editor_Blocks;

add_action(
	'enqueue_block_editor_assets',
	function () {
		wp_enqueue_code_editor( [ 'type' => 'text/html' ] );
		wp_add_inline_style( 'code-editor', '.CodeMirror { font-size: 14px }' );
		wp_enqueue_script(
			'advanced-html-editor-blocks',
			plugins_url( 'dist/blocks.js', PLUGIN_FILE ),
			[
				'wp-blocks',
				'wp-components',
				'wp-data',
				'wp-element',
				'wp-editor',
				'wp-edit-post',
				'wp-i18n',
				'code-editor',
			],
			get_plugin_data()['Version'],
			true
		);
	}
);

