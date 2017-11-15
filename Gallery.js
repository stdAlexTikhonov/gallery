define( ['text!./style.css',
		 './properties'],
    function (styleCss, properties ) {
		$('<style>').html(styleCss).appendTo('head');
		'use strict';
		
		function Block(measureName,value, type) {
			this.value = value;
			this.measureName = measureName;
			this.type = type;
			
		}
		
		Block.prototype.print = function() {
			if (this.type === 0) {
				return `<div class="list__skale-block">
		                <p class="list__percent">${this.value}
		                    <!-- <span class="span list__percent-symbol">%</span> -->
		                </p>
		                <p class="list__label">${this.measureName}</p>
		                <div class="list__skale-container">
		                    <div class="list__skale-value list__skale-value--green" style="width: ${this.value}"></div>
		                </div>
		            </div>`;
			}  else if (this.type === 1) {
						return `<div class="list__data-block">
							<div class="list__data">
								<p class="list__label">${this.measureName}</p>
							</div>

							<div class="list__data">
								<p class="list__value">${this.value}</p>
								<!-- <p class="list__label"></p> -->
							</div>
						</div>`;
			} else {
					return `<div class="list__data-block">
								<div class="list__data">
									<p class="list__value">${this.value.val2} ${this.measureName.name2}</p>
									<p class="list__label">${this.measureName.name1}</p>
								</div>

								<div class="list__data">
									<p class="list__value">${this.value.val1}</p>
									<p class="list__label"></p>
								</div>
							</div>`;
			}
				
			

		}

    return {
      definition: properties,
		initialProperties : {
		version : 1.0,
		qHyperCubeDef : {
			qDimensions : [],
			qMeasures : [],
			qInitialDataFetch : [{
				qWidth : 16,
				qHeight : 40
			}]
		}
		},
		snapshot : {
			canTakeSnapshot : true
		},
			paint: function ( $element, layout ) {
				let self = this;
				$element.empty();
				let mInfo = layout.qHyperCube.qMeasureInfo;
				let id = layout.qInfo.qId;

				
				let mNames = mInfo.map((item,i) => {
					return { name: layout.props['mera' + i] ? layout.props['mera' + i] : mInfo[i].qFallbackTitle, type: item.type };
				});
				
				
				let blocks = mNames.map(item => {
					
				})
			
				
				var qMatrix = layout.qHyperCube.qDataPages[0].qMatrix;

			
				data = qMatrix.map(function (d, i) {
					let measureNames = 0,
						measureTypes = 0,
						measureVals = 0,
						x = 0;

					var itog = {
						"dataIndex": d[0] ? d[0].qElemNumber : '',
						"image_url": d[x++] ? d[measureVals++].qText : '',
						"article":  d[x++] ? d[measureVals++].qText : '',
						"title":  d[x++] ? d[measureVals++].qText : '',
						"price": d[x++] ? d[measureVals++].qText : '',
						"discount": d[x++] ? d[measureVals++].qText: ''
					};

					while (d[x]) {
						if (mNames[measureNames].type === 2) {
							itog['block' + (measureNames + 1)] = new Block({
																				name1: mNames[measureNames++].name,
																				name2: mNames[measureNames].name
																			}, 
																			{
																				val1: d[measureVals++].qText,
																				val2: d[measureVals++].qText 
																			}, mNames[measureNames - 1].type);
							x++;
							
						} else {
							itog['block' + (measureNames + 1)] = new Block(mNames[measureNames].name, d[measureVals++].qText, mNames[measureNames++].type);
						}
						x++;
					}

					return itog;
				});

				var table = '<div class="container"><div class="container__wrapper">';

					

				data.forEach(function(element, i) {

					let indexForOutput = i + 1;
					table += `<section class="elem elem__${i}" >
								<div class="elem__img-block">
									<img class="img${id}" data-index=${element.dataIndex} width="230" height="276" src="${element.image_url}" alt="" class="elem__img">
									<span class="elem__counter">${indexForOutput}</span> 
								</div>
								<div class="elem__info-block">
									<p class="elem__article">${element.article}</p>
									<p class="elem__name">${element.title}</p>
									<p class="elem__cost">
										${element.price}${layout.props.currency}
										<span class="elem__sale-note">${element.discount} off</span>
									</p>
								</div>
								
								<input type="radio" id="list-1${i}" name="list" class="list__control-radio" checked>
								<input type="radio" id="list-2${i}" name="list" class="list__control-radio">
								<input type="radio" id="list-3${i}" name="list" class="list__control-radio">

								<div class="list__control-block">
									<label for="list-1${i}" class="list__control list__control--selected">${layout.props.tab_title1}</label>
									<label for="list-2${i}" class="list__control">${layout.props.tab_title2}</label>
									<label for="list-3${i}" class="list__control">${layout.props.tab_title3}</label>
								</div>

								<div class="elem__list-container">
									<div class="list list--selected">
										<!--1-->
										${element.block1 ? element.block1.print() : ''}
										
										<!-- 2 -->
										${element.block2 ? element.block2.print() : ''}
										
										<!-- 3 -->
										${element.block3 ? element.block3.print() : ''}
										
										<!-- 4 -->
										${element.block4 ? element.block4.print() : ''}
										
									</div>
									<!-- 2 -->
									<div class="list">
										<!--5-->
										${element.block5 ? element.block5.print() : ''}
										
										<!--6-->
										${element.block6 ? element.block6.print() : ''}
										
										<!--7-->
										${element.block7 ? element.block7.print() : ''}
										
										<!--8-->
										${element.block8 ? element.block8.print() : ''}
										</div>
									<!-- 3 -->
									<div class="list">
										<!--9-->
										${element.block9 ? element.block9.print() : ''}
										
										<!--10-->
										${element.block10 ? element.block10.print() : ''}
										
										<!--11-->
										${element.block11 ? element.block11.print() : ''}
										
										<!--12-->
										${element.block12 ? element.block12.print() : ''}
									</div>
						
								</div>
								
								</section>`;
				});
				table += "</div></div>";
				$element.append(table);

				$element.find('.list__control').on('click', function(e) {
					let index = $(this).parent().parent().index();
					let innerIndex = $(this).index() + 1;
					$(`.elem__${index}`).find('.list__control').removeClass('list__control--selected');
					$(`.elem__${index}`).find('.list').removeClass('list--selected');
					$(`.elem__${index}`).find(`.list__control:nth-of-type(${innerIndex})`).addClass('list__control--selected');
					$(`.elem__${index}`).find(`.list:nth-of-type(${innerIndex})`).addClass('list--selected');
				});

				$element.find(`.img${id}`).on('click', function(e) {
					
					let num = parseInt(e.target.getAttribute('data-index'),10);
					self.selectValues(0, [num], true);
				});
			}
        };
    } );