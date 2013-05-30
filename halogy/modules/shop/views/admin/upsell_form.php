<script type="text/javascript">
function showObjects(el){
	if ($(el).val() == 'V'){
		$('div#value').show();
		$('div#numproducts').hide();
		$('div#products').hide();
		$('div#remove').hide();
	} else if ($(el).val() == 'N'){
		$('div#value').hide();
		$('div#numproducts').show();
		$('div#products').hide();
		$('div#remove').hide();
	} else {
		$('div#value').hide();
		$('div#numproducts').hide();
		$('div#products').show();
		$('div#remove').show();
	}
}

$(function(){
	$('select#type').change(function(){
		showObjects($(this));
	});
	showObjects('select#type');
});
</script>

<div class="row">
	<div class="large-12 columns body">
		<form method="post" action="<?php echo site_url($this->uri->uri_string()); ?>" class="custom">
		<?php if (!$this->core->is_ajax()): ?>
			<h1 class="headingleft"><?php echo (preg_match('/edit/i', $this->uri->segment(3))) ? 'Edit' : 'Add'; ?> Upsell</h1>
		<?php endif; ?>

		<ul class="group-button">
			<li><input type="submit" value="Save Changes" class="button green nolabel" /></li>
		</ul>

		<hr>

		<?php if ($errors = validation_errors()): ?>
			<div class="error">
				<?php echo $errors; ?>
			</div>
		<?php endif; ?>

		<div class="large-6 small-12 large-centered columns">

			<label for="type">If the:</label>
			<?php 
				$values = array(
					'V' => 'Total value of cart',
					'N' => 'Number of products in the cart',
					'P' => 'Products in cart'
				);
				echo @form_dropdown('type',$values, set_value('type', $data['type']), 'id="type" class="formelement"'); 
			?>
			<br class="clear" />
			
			<div id="value">
				<label for="value">Is greater than:</label>
				<div class="row collapse">
					<div class="small-2 columns">
						<span class="price prefix rounded" id="currency"><?php echo currency_symbol(); ?></span>
						<span class="price" id="percentage" style="display: none;">%</span>
					</div>
					<div class="small-2 pull-8 columns">
						<?php echo @form_input('value', $data['value'], 'class="formelement small" id="value"'); ?>
					</div>
				</div>
				
			</div>

			<div style="display: none;" id="numproducts">
				<label for="discount">Is greater than:</label>
				<?php echo @form_input('numProducts', set_value('numProducts', $data['numProducts']), 'class="formelement small" id="discount"'); ?>
				<br class="clear" />
			</div>
			
			<div style="display: none;" id="products">
				<label for="productIDs">Include:</label>
				<?php
					$options = '';		
					if ($products):
						foreach ($products as $product):
							$options[$product['productID']] = $product['productName'];
						endforeach;
					endif;
					$objectIDArray = (isset($data['productIDs'])) ? @explode(',',$data['productIDs']) : $this->input->post('productIDs');
					echo @form_dropdown('productIDs[]',$options, $objectIDArray, 'id="productIDs" class="formelement" multiple="multiple"');
				?>	
				<br class="clear" />
			</div>
			
			<label for="productID">Then upsell:</label>
			<?php
				$options = '';		
				if ($products):
					foreach ($products as $products):
						$options[$products['productID']] = $products['productName'];
					endforeach;
				endif;
				echo @form_dropdown('productID', $options, set_value('productID', $data['productID']), 'id="productID" class="formelement"');
			?>	
			<br class="clear" />
			
			<div style="display: none;" id="remove">
				<label for="remove">Remove original products?</label>
				<?php 
					$values = array(
						'0' => 'No',
						'1' => 'Yes',
					);
					echo @form_dropdown('remove',$values, set_value('remove', $data['remove']), 'id="remove" class="formelement"'); 
				?>
				<br class="clear" />
			</div>	
		</div>
		</form>

	</div>
</div>
