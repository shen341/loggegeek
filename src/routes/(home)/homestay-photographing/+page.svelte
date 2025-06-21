<script>
	import MetaTagComponent from '../../Components/MetaTagComponent.svelte';
    import Transport from "$lib/img/photographing/transport.jpg";
    import TransportChange from "$lib/img/photographing/transport-change.jpg";
    import Layout from "$lib/img/photographing/layout.jpg";
    import Supermarket from "$lib/img/photographing/supermarket.jpg";
    import Foods from "$lib/img/photographing/foods.jpg";
	import { trans } from "$lib/language/i18n";


</script>

<MetaTagComponent
	title="{$trans('photography_planning')}"
	description="{$trans('photography_planning_description')}"
/>

<main id="main" class="service-section py-5" >
	<!-- Page Header -->
	<div
		class="breadcrumbs d-flex align-items-center py-5"
		style="background-image: url('https://cdn.pixabay.com/photo/2016/02/27/06/43/cherry-blossom-tree-1225186_960_720.jpg'); background-size: cover; background-position: center;"
	>
		<div class="container position-relative d-flex flex-column align-items-center">
			<h1 class="text-center page-title">{$trans('photography_planning')}</h1>
		</div>
	</div>

	<!-- Page Content -->
	<div class="container py-5">
		<div class="row justify-content-center">
			<div class="col-lg-10">
				<!-- Photography Plan Section -->
				<section id="photography-plan">
					<div class="section-title">
						<h2>{$trans('photography_plan')}</h2>
					</div>

					<div class="plan-category">
						<h3 class="category-title">{$trans('apartment_photography_plan')}</h3>
						<div class="plan-item">
							<div class="plan-description">{$trans('area_under_50')}</div>
							<div class="plan-price">{Number(18000).toLocaleString()}{$trans('jpy')}</div>
						</div>
						<div class="plan-item">
							<div class="plan-description">{$trans('area_under_100')}</div>
							<div class="plan-price">{Number(22000).toLocaleString()}{$trans('jpy')}</div>
						</div>
					</div>

					<div class="plan-category mt-4">
						<h3 class="category-title">{$trans('smal_building_photography_plan')}</h3>
						<div class="plan-item">
							<div class="plan-description">{$trans('area_under_50_extend')}
							</div>
							<div class="plan-price">{Number(20000).toLocaleString()}{$trans('jpy')}</div>
						</div>
						<div class="plan-item">
							<div class="plan-description">{$trans('area_under_100_extend')}
							</div>
							<div class="plan-price">{Number(24000).toLocaleString()}{$trans('jpy')}</div>
						</div>
						<div class="plan-item">
							<div class="plan-description">{$trans('area_under_200_extend')}
							</div>
							<div class="plan-price">{Number(28000).toLocaleString()}{$trans('jpy')}</div>
						</div>
					</div>
				</section>

				<!-- Photo Delivery Process Section -->
				<section id="delivery-process" class="mt-5">
					<div class="section-title">
						<h2>{$trans('photo_delivery_process')}</h2>
					</div>
					<ul class="process-list">
						<li>{$trans('photo_delivery_release')}</li>
						<li>{$trans('photo_delivery_release_adjust')}</li>
						<li>{$trans('photo_delivery_release_location')}</li>
					</ul>
				</section>

				<!-- Payment Process Section  -->
				<section id="payment-process" class="mt-5">
					<div class="section-title">
						<h2>{$trans('payment_process')}</h2>
					</div>
					<ul class="process-list">
						<li>{$trans('payment_deposit')}</li>
						<li>{$trans('payment_all')}</li>
						<li>{$trans('payment_channels')}</li>
					</ul>
				</section>

				<!-- Photography option Section  {$trans('additional_options')}-->
				<section id="photography-option" class="mt-5">
					<div class="section-title">
						<h2>{$trans('additional_options')}</h2>
					</div>
					<div class="option-table">
						<div class="option-header">
							<div class="option-col-item">{$trans('image_processing')}</div>
							<div class="option-col-note">{$trans('photography_plan_remarks')}
							</div>
							<div class="option-col-price">{$trans('photography_price')}
							</div>
						</div>
						<div class="option-row">
							<div class="option-col-item">{$trans('tourist_spot_map')}
							</div>
							<div class="option-col-note">{$trans('traffic_map_ten')}
							</div>
							<div class="option-col-price">{Number(6000).toLocaleString()}{$trans('jpy')}</div>
						</div>
						<div class="option-row">
							<div class="option-col-item">{$trans('floor_layout')}
							</div>
							<div class="option-col-note">{$trans('property_are_required')}
							</div>
							<div class="option-col-price">{Number(3000).toLocaleString()}{$trans('jpy')}</div>
						</div>
						<div class="option-row">
							<div class="option-col-item">{$trans('food_introduction')}
							</div>
							<div class="option-col-note">{$trans('Includes_10_food_locations')}
							</div>
							<div class="option-col-price">{Number(2000).toLocaleString()}{$trans('jpy')}</div>
						</div>
						<div class="option-row">
							<div class="option-col-item">{$trans('surrounding_facilities_introduction')}
							</div>
							<div class="option-col-note">{$trans('surrounding_facilities_ten')}
							</div>
							<div class="option-col-price">{Number(2000).toLocaleString()}{$trans('jpy')}</div>
						</div>
					</div>
				</section>

				<!--图片参考-->
				<section id="photography-reference" class="mt-5">
					<div class="section-title">
						<h2>{$trans('image_reference')}
						</h2>
					</div>
					<div class="row gy-4 mt-2">
						<div class="col-lg-4 col-md-6">
							<div class="reference-item">
								<img
									src={Transport}
									class="img-fluid"
									alt="{$trans('access_map')}"
								/>
								<p class="reference-caption">{$trans('access_map')}</p>
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="reference-item">
								<img
									src={TransportChange}
									class="img-fluid"
									alt="{$trans('transfer_map')}"
								/>
								<p class="reference-caption">{$trans('transfer_map')}</p>
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="reference-item">
								<img
									src={Layout}
									class="img-fluid"
									alt="{$trans('floor_layout')}
"
								/>
								<p class="reference-caption">{$trans('floor_layout')}
</p>
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="reference-item">
								<img
									src={Supermarket}
									class="img-fluid"
									alt="{$trans('surrounding_facilities_map')}"
								/>
								<p class="reference-caption">{$trans('surrounding_facilities_map')}</p>
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="reference-item">
								<img
									src={Foods}
									class="img-fluid"
									alt="{$trans('local_food_map')}"
								/>
								<p class="reference-caption">{$trans('local_food_map')}</p>
							</div>
						</div>
					</div>
				</section>

			</div>
		</div>
	</div>
</main>

<style>
	.page-title {
		font-size: 3rem;
		font-weight: 700;
		color: #ffffff;
		background-color: rgba(0, 0, 0, 0.5);
		padding: 10px 20px;
		border-radius: 5px;
	}

	.section-title h2 {
		font-size: 1.5rem;
		font-weight: 700;
		color: #c5a47e;
		padding-bottom: 10px;
		border-bottom: 2px solid #c5a47e;
		display: inline-block;
	}

	.plan-category {
		border-top: 2px solid #c5a47e;
		padding-top: 20px;
	}

	.category-title {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}

	.plan-item {
		display: flex;
		border-bottom: 1px solid #eee;
	}

	.plan-description {
		background-color: #fdf8f0;
		padding: 15px;
		flex-grow: 1;
	}

	.plan-price {
		padding: 15px;
		min-width: 150px;
		text-align: right;
		font-weight: 500;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.process-list {
		list-style: none;
		padding: 0;
		border-top: 2px solid #c5a47e;
	}

	.process-list li {
		padding: 15px 15px 15px 25px;
		border-bottom: 1px solid #eee;
		position: relative;
	}

	.process-list li::before {
		content: '●';
		color: #c5a47e;
		position: absolute;
		left: 0;
		top: 15px;
	}

	.option-table {
		border-top: 2px solid #c5a47e;
		font-size: 0.9rem;
	}
	.option-header,
	.option-row {
		display: flex;
		border-bottom: 1px solid #eee;
	}
	.option-header {
		font-weight: 600;
	}
	.option-header .option-col-item,
	.option-header .option-col-note,
	.option-header .option-col-price {
		background-color: #fdf8f0;
	}
	.option-col-item,
	.option-col-note,
	.option-col-price {
		padding: 15px;
	}
	.option-col-item {
		flex: 0 0 150px;
	}
	.option-col-note {
		flex-grow: 1;
	}
	.option-col-price {
		flex: 0 0 100px;
		text-align: right;
	}
	.reference-item {
		text-align: center;
		margin-bottom: 20px;
	}
	.reference-item img {
		border: 1px solid #ddd;
		padding: 5px;
		margin-bottom: 10px;
		width: 100%;
		aspect-ratio: 4 / 3;
		object-fit: cover;
	}
	.reference-caption {
		font-size: 0.9rem;
		color: #555;
		font-weight: 500;
	}
</style>
