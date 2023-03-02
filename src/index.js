import {registerBlockType} from '@wordpress/blocks'
import {richText} from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n'
import block from './block.json'


registerBlockType(block.name, {
    edit() {
        return (
           <richText 
             tagName="h2"
             placeholder={__('Enter Heading', 'udemy-plus')}
           />
        )
    }
});