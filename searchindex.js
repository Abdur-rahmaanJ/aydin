Search.setIndex({docnames:["api/feature_generator","api/image_translator","api/image_translators/base","api/image_translators/classic","api/image_translators/cnn","api/image_translators/fgr","api/introduction","api/io","api/io/datasets","api/io/folders","api/io/io","api/nn","api/nn/jinet","api/nn/unet","api/regressors","api/regressors/cb","api/regressors/lgbm","api/regressors/linear","api/regressors/nn","api/regressors/random_forest","api/regressors/support_vector","api/restoration","api/restorations/deconvolve_restoration","api/restorations/denoise_restoration","api/transforms","contact_us/github","getting_started/hardware_requirements","getting_started/install","getting_started/why_aydin","index","tutorials/api_tutorials","tutorials/api_tutorials/image_translator/classic","tutorials/api_tutorials/image_translator/cnn","tutorials/api_tutorials/image_translator/fgr","tutorials/api_tutorials/image_translator/noise2noise","tutorials/api_tutorials/image_translator/supervised","tutorials/api_tutorials/restoration/classic","tutorials/api_tutorials/restoration/lucyrichardson","tutorials/api_tutorials/restoration/noise2self_cnn","tutorials/api_tutorials/restoration/noise2self_fgr","tutorials/api_tutorials/transforms/attenuation","tutorials/api_tutorials/transforms/deskew","tutorials/api_tutorials/transforms/fixed_pattern","tutorials/api_tutorials/transforms/highpass","tutorials/api_tutorials/transforms/histogram","tutorials/api_tutorials/transforms/motion","tutorials/api_tutorials/transforms/padding","tutorials/api_tutorials/transforms/periodic","tutorials/api_tutorials/transforms/range","tutorials/api_tutorials/transforms/salt_pepper","tutorials/api_tutorials/transforms/variance_stabilisation","tutorials/cli_tutorials","tutorials/gui_tutorials","tutorials/tutorials_home","use_cases/basics","use_cases/confocal","use_cases/introduction"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api/feature_generator.rst","api/image_translator.rst","api/image_translators/base.rst","api/image_translators/classic.rst","api/image_translators/cnn.rst","api/image_translators/fgr.rst","api/introduction.rst","api/io.rst","api/io/datasets.rst","api/io/folders.rst","api/io/io.rst","api/nn.rst","api/nn/jinet.rst","api/nn/unet.rst","api/regressors.rst","api/regressors/cb.rst","api/regressors/lgbm.rst","api/regressors/linear.rst","api/regressors/nn.rst","api/regressors/random_forest.rst","api/regressors/support_vector.rst","api/restoration.rst","api/restorations/deconvolve_restoration.rst","api/restorations/denoise_restoration.rst","api/transforms.rst","contact_us/github.rst","getting_started/hardware_requirements.rst","getting_started/install.rst","getting_started/why_aydin.rst","index.rst","tutorials/api_tutorials.rst","tutorials/api_tutorials/image_translator/classic.rst","tutorials/api_tutorials/image_translator/cnn.rst","tutorials/api_tutorials/image_translator/fgr.rst","tutorials/api_tutorials/image_translator/noise2noise.rst","tutorials/api_tutorials/image_translator/supervised.rst","tutorials/api_tutorials/restoration/classic.rst","tutorials/api_tutorials/restoration/lucyrichardson.rst","tutorials/api_tutorials/restoration/noise2self_cnn.rst","tutorials/api_tutorials/restoration/noise2self_fgr.rst","tutorials/api_tutorials/transforms/attenuation.rst","tutorials/api_tutorials/transforms/deskew.rst","tutorials/api_tutorials/transforms/fixed_pattern.rst","tutorials/api_tutorials/transforms/highpass.rst","tutorials/api_tutorials/transforms/histogram.rst","tutorials/api_tutorials/transforms/motion.rst","tutorials/api_tutorials/transforms/padding.rst","tutorials/api_tutorials/transforms/periodic.rst","tutorials/api_tutorials/transforms/range.rst","tutorials/api_tutorials/transforms/salt_pepper.rst","tutorials/api_tutorials/transforms/variance_stabilisation.rst","tutorials/cli_tutorials.rst","tutorials/gui_tutorials.rst","tutorials/tutorials_home.rst","use_cases/basics.rst","use_cases/confocal.rst","use_cases/introduction.rst"],objects:{"aydin.features.base":{FeatureGeneratorBase:[0,1,1,""]},"aydin.features.base.FeatureGeneratorBase":{compute:[0,2,1,""],create_feature_array:[0,2,1,""],get_receptive_field_radius:[0,2,1,""],load:[0,2,1,""],save:[0,2,1,""]},"aydin.features.extensible_features":{ExtensibleFeatureGenerator:[0,1,1,""]},"aydin.features.extensible_features.ExtensibleFeatureGenerator":{add_feature_group:[0,2,1,""],clear_features:[0,2,1,""],compute:[0,2,1,""],create_feature_array:[0,2,1,""],get_num_features:[0,2,1,""],get_receptive_field_radius:[0,2,1,""],load:[0,2,1,""],save:[0,2,1,""]},"aydin.features.standard_features":{StandardFeatureGenerator:[0,1,1,""]},"aydin.features.standard_features.StandardFeatureGenerator":{add_feature_group:[0,2,1,""],clear_features:[0,2,1,""],compute:[0,2,1,""],create_feature_array:[0,2,1,""],get_num_features:[0,2,1,""],get_receptive_field_radius:[0,2,1,""],load:[0,2,1,""],save:[0,2,1,""]},"aydin.io.folders":{get_cache_folder:[9,0,1,""],get_home_folder:[9,0,1,""],get_temp_folder:[9,0,1,""]},"aydin.io.io":{FileMetadata:[10,1,1,""],imread:[10,0,1,""],imwrite:[10,0,1,""],is_batch:[10,0,1,""],is_channel:[10,0,1,""]},"aydin.it.base":{ImageTranslatorBase:[2,1,1,""]},"aydin.it.base.ImageTranslatorBase":{add_transform:[2,2,1,""],clear_transforms:[2,2,1,""],load:[2,2,1,""],parse_axes_args:[2,2,1,""],save:[2,2,1,""],train:[2,2,1,""]},"aydin.it.classic":{ImageDenoiserClassic:[3,1,1,""]},"aydin.it.classic.ImageDenoiserClassic":{add_transform:[3,2,1,""],clear_transforms:[3,2,1,""],load:[3,2,1,""],parse_axes_args:[3,2,1,""],save:[3,2,1,""],train:[3,2,1,""]},"aydin.it.cnn":{ImageTranslatorCNN:[4,1,1,""]},"aydin.it.cnn.ImageTranslatorCNN":{add_transform:[4,2,1,""],clear_transforms:[4,2,1,""],load:[4,2,1,""],parse_axes_args:[4,2,1,""],save:[4,2,1,""],stop_training:[4,2,1,""],train:[4,2,1,""]},"aydin.it.fgr":{ImageTranslatorFGR:[5,1,1,""]},"aydin.it.fgr.ImageTranslatorFGR":{add_transform:[5,2,1,""],clear_transforms:[5,2,1,""],load:[5,2,1,""],parse_axes_args:[5,2,1,""],save:[5,2,1,""],stop_training:[5,2,1,""],train:[5,2,1,""]},"aydin.it.transforms.attenuation":{AttenuationTransform:[24,1,1,""]},"aydin.it.transforms.deskew":{DeskewTransform:[24,1,1,""]},"aydin.it.transforms.fixedpattern":{FixedPatternTransform:[24,1,1,""]},"aydin.it.transforms.highpass":{HighpassTransform:[24,1,1,""]},"aydin.it.transforms.histogram":{HistogramEqualisationTransform:[24,1,1,""]},"aydin.it.transforms.motion":{MotionStabilisationTransform:[24,1,1,""]},"aydin.it.transforms.padding":{PaddingTransform:[24,1,1,""]},"aydin.it.transforms.periodic":{PeriodicNoiseSuppressionTransform:[24,1,1,""]},"aydin.it.transforms.range":{RangeTransform:[24,1,1,""]},"aydin.it.transforms.salt_pepper":{SaltPepperTransform:[24,1,1,""]},"aydin.it.transforms.variance_stabilisation":{VarianceStabilisationTransform:[24,1,1,""]},"aydin.nn.models.jinet":{JINetModel:[12,1,1,""]},"aydin.nn.models.jinet.JINetModel":{fit:[12,2,1,""],size:[12,2,1,""]},"aydin.nn.models.unet":{UNetModel:[13,1,1,""]},"aydin.nn.models.unet.UNetModel":{fit:[13,2,1,""],size:[13,2,1,""],unet_core_2d:[13,2,1,""],unet_core_3d:[13,2,1,""]},"aydin.regression.cb":{CBRegressor:[15,1,1,""]},"aydin.regression.cb.CBRegressor":{fit:[15,2,1,""],load:[15,2,1,""],predict:[15,2,1,""],recommended_max_num_datapoints:[15,2,1,""],save:[15,2,1,""],stop_fit:[15,2,1,""]},"aydin.regression.lgbm":{LGBMRegressor:[16,1,1,""]},"aydin.regression.lgbm.LGBMRegressor":{fit:[16,2,1,""],load:[16,2,1,""],predict:[16,2,1,""],recommended_max_num_datapoints:[16,2,1,""],save:[16,2,1,""],stop_fit:[16,2,1,""]},"aydin.regression.linear":{LinearRegressor:[17,1,1,""]},"aydin.regression.linear.LinearRegressor":{fit:[17,2,1,""],load:[17,2,1,""],predict:[17,2,1,""],recommended_max_num_datapoints:[17,2,1,""],save:[17,2,1,""],stop_fit:[17,2,1,""]},"aydin.regression.nn":{NNRegressor:[18,1,1,""]},"aydin.regression.nn.NNRegressor":{fit:[18,2,1,""],load:[18,2,1,""],predict:[18,2,1,""],recommended_max_num_datapoints:[18,2,1,""],save:[18,2,1,""],stop_fit:[18,2,1,""]},"aydin.regression.random_forest":{RandomForestRegressor:[19,1,1,""]},"aydin.regression.random_forest.RandomForestRegressor":{fit:[19,2,1,""],load:[19,2,1,""],predict:[19,2,1,""],recommended_max_num_datapoints:[19,2,1,""],save:[19,2,1,""],stop_fit:[19,2,1,""]},"aydin.regression.support_vector":{SupportVectorRegressor:[20,1,1,""]},"aydin.regression.support_vector.SupportVectorRegressor":{fit:[20,2,1,""],load:[20,2,1,""],predict:[20,2,1,""],recommended_max_num_datapoints:[20,2,1,""],save:[20,2,1,""],stop_fit:[20,2,1,""]},"aydin.restoration.deconvolve.lr":{LucyRichardson:[22,1,1,""]},"aydin.restoration.deconvolve.lr.LucyRichardson":{deconvolve:[22,2,1,""],train:[22,2,1,""]},"aydin.restoration.denoise.classic":{Classic:[23,1,1,""]},"aydin.restoration.denoise.classic.Classic":{archive_model:[23,2,1,""],clean_model_folder:[23,2,1,""],configurable_arguments:[23,3,1,""],denoise:[23,2,1,""],get_translator:[23,2,1,""],implementations:[23,3,1,""],save_model:[23,2,1,""],set_image_metrics:[23,2,1,""],stop_running:[23,2,1,""],train:[23,2,1,""]},"aydin.restoration.denoise.noise2selfcnn":{Noise2SelfCNN:[23,1,1,""]},"aydin.restoration.denoise.noise2selfcnn.Noise2SelfCNN":{archive_model:[23,2,1,""],clean_model_folder:[23,2,1,""],configurable_arguments:[23,3,1,""],denoise:[23,2,1,""],get_translator:[23,2,1,""],implementations:[23,3,1,""],save_model:[23,2,1,""],stop_running:[23,2,1,""],train:[23,2,1,""]},"aydin.restoration.denoise.noise2selffgr":{Noise2SelfFGR:[23,1,1,""]},"aydin.restoration.denoise.noise2selffgr.Noise2SelfFGR":{archive_model:[23,2,1,""],clean_model_folder:[23,2,1,""],configurable_arguments:[23,3,1,""],denoise:[23,2,1,""],get_generator:[23,2,1,""],get_regressor:[23,2,1,""],get_translator:[23,2,1,""],implementations:[23,3,1,""],save_model:[23,2,1,""],set_image_metrics:[23,2,1,""],stop_running:[23,2,1,""],train:[23,2,1,""]},aydin:{classic_denoise:[23,0,1,""],lucyrichardson:[22,0,1,""],noise2self_cnn:[23,0,1,""],noise2self_fgr:[23,0,1,""]}},objnames:{"0":["py","function","Python function"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","property","Python property"]},objtypes:{"0":"py:function","1":"py:class","2":"py:method","3":"py:property"},terms:{"0":[0,2,3,4,5,13,15,16,17,18,19,22,23,24,40,41,45],"0001":[17,19],"001":18,"01":[4,15,16,24],"08":24,"09":24,"1":[2,3,4,5,16,17,22,23,24,41,42],"10":18,"100":19,"10000":16,"1024":[18,19],"11":24,"12":24,"125":24,"127":16,"13":0,"16":[24,26],"16gb":29,"17":46,"2":[0,24,42],"20":[22,37],"2048":[15,19],"24":51,"2d":[12,22,24],"3":[0,2,3,4,5,13,24,27,41],"30":4,"32":[4,15,19,24,26],"321":[24,51],"3d":[12,22,24],"4":[4,24,26,29,51],"45":24,"481":51,"5":[0,4,16,24],"512":[15,16,17,19],"6":18,"64":[4,24],"8":[2,24],"9":[2,24,27],"95":[15,16],"99":24,"abstract":[0,1],"byte":[12,13],"case":[24,28,29],"class":[0,1,2,3,4,5,10,12,13,15,16,17,18,19,20,22,23,24,36,38,39],"default":[23,24,31,32,33,36,37,38,39,51,52],"do":[12,13,24,25,31,32,33,36,38,39],"final":[24,52],"float":[0,2,4,5,15,16,17,18,19,24],"function":[0,6,12,13,15,16,17,18,19,20,24],"import":[31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],"int":[0,2,3,4,5,15,16,17,18,19,20,22,24],"new":[23,25,52],"public":0,"return":[0,2,3,4,5,10,12,13,15,16,17,18,19,20,22,23],"static":[0,2,3,4,5,15,16,17,18,19,20,23],"true":[0,2,3,4,5,10,15,20,24,56],"try":30,"while":[24,28,29,52,56],And:24,As:52,At:52,By:[1,23,52],For:[22,24],If:[0,15,16,17,18,19,20,24,25,29,52],In:[24,29,52],It:[24,27,28,29,31,32,33,34,35,36,38,39,52],NOT:[12,13],On:27,One:[21,31,32,33,36,37,38,39,51],Or:51,TO:51,The:[12,13,15,16,17,18,19,20,24,56],Then:[27,52],There:[52,56],To:[24,29,52],With:[27,52],abl:[15,16,17,18,19,20,26,27,52],about:[34,51,52],absenc:29,academ:56,access:[51,52],achiev:[24,35,51],acquir:52,across:[10,52],activ:[4,27],activity_regular:[12,13],actual:[13,22,24],ad:[12,13,24,52],add:[0,2,3,4,5,24,52],add_feature_group:0,add_loss:[12,13],add_metr:[12,13],add_transform:[2,3,4,5,23,31,32,33,34,35],addit:0,address:52,adjust:52,adoption_r:4,advantag:24,affect:56,after:[24,27,31,32,33,36,38,39,52],again:52,aggress:24,algorithm:[23,24,26,29,52],alia:[12,13],align:24,all:[0,2,3,4,5,12,13,15,16,17,18,19,20,24,28,29,53],allevi:24,allow:24,almost:24,along:24,alpha:17,also:[0,24,25,29,30,31,32,33,36,37,38,39,51,52,56],altern:51,alwai:24,amount:24,an:[0,2,3,4,5,15,16,17,18,19,20,22,23,24,26,29,30,34,52,53],ani:[1,24,25,28,52,56],anoth:[15,16,17,18,19,20],anscomb:[24,50],anywher:52,api:[0,1,12,13,21,22,23,29,31,32,33,34,35,40,41,42,43,44,45,46,47,48,49,50,53],appli:[15,16,17,18,19,20,24,28,30,52],applic:[27,53],approach:[24,27,51],approxim:24,ar:[0,1,13,24,26,27,52,56],arbitrari:29,archiv:23,archive_model:23,arg:[0,12,13,51],argument:[0,10,23,52],around:24,arrai:[0,10,24,29,56],array_lik:[22,23],arraylik:[10,15,16,17,18,19,20],artifact:[24,52],asid:26,associ:[12,13],assum:[24,51],attenu:[24,30],attenuation_transform:40,attenuationtransform:40,attribut:[4,12,13,23],auto:29,automat:24,avail:[13,29,34,53],averag:24,awai:24,ax:[10,22,23,24,40,42,45,51],axi:[10,24],aydin:[0,1,2,3,4,5,6,7,9,10,12,13,15,16,17,18,19,20,21,22,23,24,26,29,30,31,32,33,34,35,36,38,39,40,41,42,43,44,45,46,47,48,49,50,53],aydin_env:27,back:52,backend:[22,37],background:24,balance_training_data:5,base:[0,1,2,3,4,5,24],basic:[52,56],batch:[2,3,4,5,10,22,23,29],batch_ax:[2,3,4,5,22,23,51],batch_norm:4,batch_siz:[4,12,13],batteri:[0,2,3,4,5,15,16,17,18,19,20],becaus:24,befor:[24,28,31,32,33,36,38,39,52],being:52,believ:52,belong:10,below:[1,27,30,34,35,51,52,56],benefici:24,best:[24,25,29],beta:17,better:[20,29],between:[22,23,24],beyond:56,bigger:26,bit:24,blind:24,blind_spot:2,blink:24,blue:24,blur:24,blurri:24,bool:[0,2,3,4,5,10,15,16,20,23,24],boot:52,border:24,both:[24,29,52,56],box:[24,26],br:4,bright:24,bring:52,broken:24,browser:28,built:[6,52],bundl:52,butterworth:[3,23,26],button:[27,52],calibration_kwarg:3,call:[5,15,16,17,18,19,20,21,22,24,52],callback:[4,12,13,15,16,17,18,19,20],callback_period:[2,3,4,5],came:56,camera:24,can:[1,11,15,16,17,18,19,20,21,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,52,56],canvas:52,card:[26,29],care:24,carefulli:[24,28],carri:24,catboost:[14,26],caus:[15,16,17,18,19,20,24,26],cb:[15,23],cbregressor:15,certain:[10,24,27,52],challeng:[24,56],chan_ax:[2,3,4,5,22,23],chang:52,channel:[10,15,16,17,18,19,20,22,23,29],channel_ax:[2,3,4,5,51],characteris:24,characterist:52,checbox:52,check:[10,29],checkbox:52,chemistri:56,chill:29,choic:[51,52],choos:[23,27,52],chosen:[24,51,52],citat:29,clahe:24,classic:[30,31],classic_denois:[23,36],classic_restor:36,clean:[13,23],clean_model_fold:23,clear:[0,2,3,4,5],clear_featur:0,clear_transform:[2,3,4,5],cli:[23,29,52,53],click:[27,52],clip:24,close:[24,27],closest:24,cnn:[4,23,32,35],code:[10,29,34],colab:30,colors_of_nois:24,column:24,combin:[24,28],come:[24,29,56],command:[27,28,29,51,53],common:[24,52],commun:25,comparison:28,compat:[12,13],compil:[12,13],complementari:1,complet:24,complex:24,complic:24,compress:[24,27],comput:[0,6,12,13,22,24,26,27,52],compute_dtyp:[12,13],compute_load:[15,16],compute_mask:[12,13],compute_training_loss:16,conda:26,configur:[6,23,28,52],configurable_argu:23,confoc:56,consid:[0,24,29,52],consist:24,constant:24,constructor:[12,13],context:24,continu:27,contrast:56,contribut:25,control:24,conv:13,conveni:27,convent:52,convolut:23,cool:52,cooler:52,copi:45,core:[13,26,29],correct:[24,49,52],correctli:52,correl:24,correspond:[5,10,15,16,17,18,19,20,23,52],could:26,coupl:11,cox:24,cpu:[26,29],craft:28,creat:[0,12,13,23,25,27,52],create_feature_arrai:0,create_patches_for_valid:[12,13],crop:24,crucial:24,cuda:26,cudatoolkit:[26,27],cumul:52,cupi:[37,51],current:[1,4,5,24,28,52],custom:[28,29],czi:52,d:0,dark:24,datapoint:[15,16,17,18,19,20],dataset:[7,15,16,17,18,19,20,52],dct_max_freq:0,decimate_large_scale_featur:0,decis:10,deconvolut:21,deconvolv:[1,21,30],decreas:24,defin:24,degrad:56,delta:[24,41],demonstr:[30,51],denois:[1,21,22,24,26,29,30,34,37],denoised_imag:[36,38,39],denormalis:24,densiti:24,depend:[24,26,27],deprec:[12,13],depth:[18,53],deriv:24,describ:[12,13],descript:53,design:[52,56],desir:23,deskew:[24,30],deskew_transform:41,deskewed_imag:41,deskewtransform:41,destin:[23,27],detail:[10,11,27,52],detect:52,detector:[24,56],determin:24,develop:0,dialog:52,didact:56,differ:[11,24,27,29,34,51,52,56],difficulti:24,dim:24,dimens:[0,10,22,24,29],dimension:[29,52,56],discov:23,discuss:25,disentangl:24,disk:56,displai:[12,13],distribut:[12,13],distribute_strategi:[12,13],dive:52,divers:56,docstr:10,doe:[20,24],doi:29,done:[27,52],doubl:[27,52],download:[27,29],drag:52,dramat:28,drop:52,dtype:[0,12,13,51],dtype_polici:[12,13],durat:52,dure:24,dynam:[12,13],e:24,each:[13,24,28,30,52,56],eager:[12,13],eagerli:[12,13],earli:4,easi:[28,31,32,33,34,35,36,38,39,52],easier:27,easili:29,edg:24,effect:[24,28,52],either:24,element:52,en:24,enabl:0,encod:[15,16,17,18,19,20],end:[26,52],end_valu:24,endpoint:[36,37,38,39],engin:0,equal:24,equalis:[24,30],especi:[24,29],essenti:56,estim:24,etc:56,even:29,exampl:[24,28,34,35],except:52,exclude_center_featur:0,exclude_center_valu:0,excluded_voxel:0,execut:27,exhaust:29,exist:26,expect:[17,51],experi:29,explain:52,explan:[28,52],explanatori:52,expos:[23,52],ext:51,extend:[1,12,13,56],extend_large_scale_featur:0,extens:[0,52],extensible_featur:0,extent:24,extern:[12,13],extract:27,extrem:24,f:[15,16,17,18,19,20],facilit:24,fairli:52,fals:[0,5,16,24,51],far:24,fast:[17,24,26,29],faster:[20,26,29],favour_bright_pixel:5,feasibl:52,featur:[6,15,16,17,18,19,20,23,29,30,51,52,53],feature_gener:[5,23],feature_group:0,feature_last_dim:0,featuregeneratorbas:[5,23],featuregroupbas:0,feel:[25,52],few:[24,51],fgr:[5,23,33,34,35],field:0,figur:28,file:[23,27],filemetadata:10,filter:24,find:[1,24,27,28,29,34,52],fine:52,first:[24,25,27,52,56],fit:[12,13,15,16,17,18,19,20],fix:[24,30],fix_lipschitz:24,fix_rep:24,fixedpattern:[24,42],fixedpattern_transform:42,fixedpatterntransform:42,flag:[4,23],flexibl:27,float32:0,flow:22,fluctuat:24,folder:[0,2,3,4,5,7,15,16,17,18,19,20,23,27,52],follow:[6,11,31,32,33,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51],force_float_datatyp:24,forest:14,forget:25,form:24,format:[12,13,24,51,52],forrest:19,forward:52,found:[11,29,34],frame:24,free:25,frequenc:24,friendli:[29,52,53],from:[0,2,3,4,5,6,15,16,17,18,19,20,23,24,26,27,29,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,52,56],frozen:[0,3,5,15,16,17,18,19,20],full:52,fundament:52,further:24,futur:52,g:24,gaussian:24,gb:26,gener:[1,6,23,24,56],get:[27,51],get_cache_fold:9,get_callback:5,get_class_implementation_kwonlyarg:23,get_function_implementation_kwonlyarg:23,get_gener:23,get_home_fold:9,get_implementations_in_a_modul:23,get_num_featur:0,get_receptive_field_radiu:[0,4],get_regressor:23,get_temp_fold:9,get_transl:23,gigabyt:29,github:[25,34],give:[24,26,27,52,53],given:[0,2,3,4,5,10,15,16,17,18,19,20,23,24,28,29,52],glob:51,go:[22,29],good:24,googl:30,gpu:[15,26,27,29],gpu_devic:15,gpu_predict:16,graphic:[26,29,53],great:34,groundtruth:35,group:0,gui:[23,51,52,53],guid:27,guidelin:25,h:0,ha:[2,3,4,5,24,27],handl:[29,52],happen:24,have:[11,15,16,17,18,19,20,24,26,27,29,30,51,52],headless:53,help:[24,26,27,51,52],henc:[28,52],here:[28,29,34,51],high:[24,26,30],highli:[24,28],highlight:26,highpass:[24,43],highpass_transform:43,highpasstransform:43,histogram:[24,30],histogram_transform:44,histogramequalisationtransform:44,home:27,how:[30,51,52,56],howev:[22,24],href:24,http:24,huber:17,icon:[27,52],idea:24,ideal:[24,26,56],imag:[0,2,4,5,6,10,12,13,21,22,23,24,26,29,34,40,41,42,43,44,45,46,47,48,49,50],image1:51,image2:51,image3:51,image_model:51,image_opt:51,image_path:23,image_shap:23,imagedenoiserclass:[1,30],imagetransformbas:[2,3,4,5],imagetranslatorbas:[1,23],imagetranslatorcnn:[1,30,35],imagetranslatorfgr:[1,30,35],imagetranslatorlrdeconv:22,img_val:[12,13],impact:24,imperfect:52,implement:[0,1,11,21,23,28,30,52],implementations_descript:23,importantli:24,improv:[15,16,17,18,19,20,24,28,52],impuls:24,imread:10,imwrit:10,inbound_nod:[12,13],includ:[2,3,4,5,15,16,17,18,19,20,52],include_corner_featur:0,include_dct_featur:0,include_fine_featur:0,include_line_featur:0,include_median_featur:0,include_random_conv_featur:0,include_scale_on:0,include_spatial_featur:0,increas:24,independ:52,indic:[12,13,22,23],individu:28,inevit:52,infer:[15,16,17,18,19,20,23,52],info:51,inform:[11,34,51],inher:56,inlcud:0,input:[0,2,3,4,5,12,13,15,16,17,18,19,20,22,23],input_imag:[2,3,4,5,12,13,22],input_lyr:13,input_mask:[12,13],input_model_path:23,input_path:10,input_shap:[12,13],input_spec:[12,13],inputspec:[12,13],insight:56,instal:[26,29,52],instanc:[4,5,12,13,22,23,34],instanci:[15,16,17,18,19,20],instead:24,instrument:56,integ:24,integr:[24,28,29,51,53],intend:52,intens:24,interact:27,interfac:[29,53],intern:[0,15,16,17,18,19,20,23,28],interpol:24,interpret:52,io:[6,9],is_batch:10,is_channel:10,is_fold:51,isol:24,issu:[24,25,52],it_transform:[23,36,38,39],item:26,iter:[13,24],its:[10,12,13,24,27,52],itself:24,jinet:[4,12,23],jinet_cor:12,jinetmodel:11,jinv:[2,3,4,5],job:29,johnson:24,json:[15,16,17,18,19,20,51,52],just:[27,52,56],keep:[22,24],kera:[12,13],kernel:22,kernel_scal:0,kernel_shap:0,kernel_width:0,keyword:0,kind:[24,56],kindli:29,know:[52,56],kwarg:[0,3,4,5,12,13,17,22,23,24,36,38,39],l1:[15,16,18,19],label:[12,13],laptop:29,larg:[24,26,29],larger:24,latest:23,layer:[6,12,13,22,23],lazi:0,lead:24,learn:[13,15,16,17,18,19,20],learn_rat:4,learning_r:[15,16,18,19],least:[24,26,29,52],leave_as_float:24,left:[24,52],length:10,less:[24,56],lesser:24,level:[6,22,24,51],lgbm:[16,19],lgbmregressor:16,librari:[19,26,52],lightgbm:14,lightweight:28,like:[18,25,52,56],line:[27,29,31,32,33,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,53],linear:[14,20,24],linear_ramp:24,linearregressor:17,link:[28,52],lipschitz:24,list:[0,2,3,4,5,12,13,23,24,52],littl:24,load:[0,2,3,4,5,15,16,17,18,19,20],local:24,locat:52,log:24,look:52,loss:[12,13,15,16,18,19],loss_histori:[12,13],lossi:24,lossless:51,lot:[2,3,4,5,56],low:24,lower:[22,51],lower_level_arg:23,lowpass:31,lr:[22,37],lr_deconvolved_imag:37,luci:28,lucyrichardson:[22,37,51],machin:[26,29,51],machineri:[2,3,4,5],made:[1,51],mai:[24,26],main:53,main_channel:3,make:[10,26,52],mani:[24,56],map:0,mask:[12,13],mask_radiu:24,mask_siz:[4,13],max:24,max_bin:[15,16,19],max_epoch:[4,12,13,18],max_level:0,max_memory_usage_ratio:2,max_num_estim:[15,16,19],max_num_iter:[17,22,37],max_num_peak:24,max_pixel_shift:24,max_rep:24,max_tiling_overhead:2,max_voxels_for_train:[3,5],maximum:[15,16,17,18,19,20,24],mean:24,measur:56,mechan:56,median:24,median_filt:24,memori:[0,26],mention:52,menubar:52,metadata:[10,51,52],method:[0,1,2,3,4,5,10,12,13,15,16,17,18,19,20,21,22,23,24,28,31,34],metric:[12,13,23],metrics_nam:[12,13],microscopi:56,might:[0,24,26,52],mileston:25,millisecond:51,min:24,min_const:24,min_length_to_pad:24,min_level:0,min_num_estim:15,minimum:24,minmax:[24,48],mistak:52,modal:[24,52,56],mode:[13,17,24,48,50],model:[2,3,4,5,11,12,13,23,34],model_architectur:4,model_class:4,model_fold:23,model_path:23,models_to_us:[15,16,17,18,19,20],modest:[26,29],modul:[1,7,12,13,21,23],monitor:2,more:[2,3,4,5,10,24,26,27,29,34,52,56],most:[1,24,52],motion:[24,30],motion_transform:45,motionstabilisationtransform:45,much:20,multi:[6,52,56],multipl:[1,15,16,17,18,19,20,24,52,56],must:24,n2:[23,24,38,39],n:[0,27,29,52],name:[12,13,27],name_scop:[12,13],napari:[28,51,52],nb_featur:0,nb_unet_level:4,nd:28,ndarrai:[0,22,23],ndim:[0,2,3,4,5],nearli:20,need:[22,24,26,52],neighbor:24,network:[11,18,23],neural:[11,18,23],next:[23,24,52],nn:[6,12,13,14,51],nnregressor:18,nois:[24,30,34,56],noise2nois:30,noise2self:[22,23,51],noise2self_cnn:[23,38],noise2self_fgr:[23,39],noise2selfcnn:30,noise2selffgr:[30,51],noisi:[13,23,31,32,33,34,35],noisy_and_blurred_imag:37,noisy_imag:[23,34,36,38,39],noisy_image1:34,noisy_image2:34,noisy_pair:34,non:[12,13,20,24],non_trainable_vari:[12,13],non_trainable_weight:[12,13],none:[0,2,3,4,5,10,12,13,15,16,17,18,19,20,22,23,24],normal:22,normalis:24,note:[17,20,24,51],noth:24,notion:1,now:[22,24],num_iter:24,num_leav:[15,16,19],num_reserved_featur:0,num_sinusoidal_featur:0,numba:26,number:[0,15,16,17,18,19,20,22,29,52],numer:52,numpi:[0,10,15,16,17,18,19,20,22,23],nvidia:[26,29],object:[15,16,17,18,19,20,21,22,23,31,32,33,36,37,38,39],observ:52,obvious:29,odd:22,offend:24,offer:1,offlin:29,offset:24,often:24,oftentim:52,older:26,onc:[27,52],one:[1,24,27,51,52,56],onli:[12,13,24,28,51,52],opac:[22,23],open:[27,52],oper:[24,27,53],optic:56,option:[2,3,4,5,12,13,15,22,23,24,31,32,33,36,37,38,39],orang:26,order:24,org:24,orient:[21,22,23,31,32,33,36,37,38,39],origin:[24,34],other:[6,24,26,29,56],ouput:[15,16,17,18,19,20],our:[25,29,31,32,33,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,52],out:[1,24,26,52],outbound_nod:[12,13],outlier:24,output:[2,3,4,5,12,13],output_mask:[12,13],output_path:10,output_shap:[12,13],over:[24,52],overal:17,overview:26,overwrit:10,own:[12,13,51],packag:[6,10,26,28,29],pad:[24,30],pad_mod:24,pad_width:[24,46],padding_transform:46,paddingtransform:[31,32,33,34,35,36,38,39,46],page:[11,26,27,52],pair:[15,16,17,18,19,20,34],paper:34,paramet:[0,2,3,4,5,10,12,13,15,16,17,18,19,20,22,23,24,28,29,51,52,53],parent:13,parse_axes_arg:[2,3,4,5],part:[1,24,52],particip:25,partit:27,pass:[24,30,31,32,33,36,38,39,51,52],passthrough_channel:0,patch_siz:[4,13],path:[0,2,3,4,5,10,15,16,17,18,19,20,23,51],patienc:[4,15,16,18,19],pattern:[24,30,51],peak:24,peopl:56,pepper:[24,30],per:24,percentil:24,perceptron:18,perform:[1,15,16,17,18,19,20,24,26,29,52],period:[24,30],periodic_noise_suppression_transform:47,periodicnoisesuppressiontransform:47,phenomena:24,photo:56,photograph:56,pip:[27,52],pixel:[0,13,24],place:21,placement:24,plai:51,plan:25,plane:24,platform:30,pleas:[24,27,29,52],png:52,point:[24,52,56],poisson:24,polici:[12,13],poor:17,popul:13,possibl:[0,24,51,52],post:24,post_processing_is_invers:24,postprocess:[24,40,41,43,44,45,46,47,48,50,52],postprocessed_imag:45,potenti:24,power:24,predict:[15,16,17,18,19,20],prepar:[22,27,34],prepare_monitoring_imag:5,preprocess:[24,40,41,42,43,44,45,46,47,48,49,50,52],preprocessed_imag:45,present:56,pretti:[28,52],previou:52,previous:23,prioriti:24,problem:[25,56],problemat:26,procedur:[21,22,23,36,37,38,39],process:[24,26],profil:29,program:[29,53],progress:27,properti:23,proport:24,provid:[0,1,6,21,24,28,29,30,34,35,51,52,53],psf:28,psf_kernel:[22,37],publish:34,pull:25,purpos:6,python:[12,13,27,29,53],qualiti:28,quick:35,quit:[26,34,35],radiu:0,ram:[26,29],ramp:24,random:[4,14],random_forest:19,random_mask_ratio:[4,13],randomforestregressor:19,rang:[24,30],range_transform:48,rangetransform:[31,32,33,34,35,36,38,39,48],rapidli:52,reach:25,read:[10,25,52],readi:27,realis:56,realist:56,reappli:24,reason:24,recent:26,recept:0,recommend:[15,16,17,18,19,20,24,26,28,29],recommended_max_num_datapoint:[15,16,17,18,19,20],recov:24,red:26,reduc:24,reduce_lr_factor:13,reducelr_pati:13,refer:[24,52],reference_index:24,reflect:24,region:24,regist:24,registr:24,regress:[15,16,17,18,19,20,23],regressor:[5,6,23],regressor_callback:[15,16,17,18,19,20],regressorbas:[5,23],regular:[12,13],rel:[1,24],relat:[25,51,56],relu:4,remov:24,replac:24,replace_bi:13,repositori:25,repres:24,requir:[1,13,27,56],rescal:24,reset_st:[12,13],reskew:24,respect:52,respons:[22,23],rest:52,restor:[6,37],result:[0,24,52],retrain:4,retriev:[12,13],revert:52,rich:29,richardson:28,right:[0,27,52],row:24,rtx:26,run:[4,5,12,13,23,26,27,28,29,35,52],run_eagerli:[12,13],runtim:26,s:[12,13,26],said:26,salt:[24,30],salt_pepp:[24,49],salt_pepper_transform:49,saltpeppertransform:[24,49],same:[0,34,35,52],save:[0,2,3,4,5,15,16,17,18,19,20,23,51],save_cnn:4,save_model:23,scale:24,scale_one_width:0,scheme:13,scipi:[22,37],screen:[51,52],script:[27,53],second:[24,27],section:52,see:[27,34,35,52],seen:24,select:[22,23,28],self:[2,3,4,5,13,24,29,52],separ:52,sequenc:[12,13,15,24],seri:26,servic:22,set:[0,12,13,23,24,27,51,52],set_image_metr:23,settabl:[12,13],setup:52,sever:[23,30],sh:27,shape:[0,10,12,13,51,52],share:34,shear:24,shift:[13,24],shiftconv:13,shorten:52,should:[12,13,22,24,27],show:[27,52],shown:[27,35,51,52],sigma:24,signal:[24,34],significantli:52,similar:35,simpl:[24,27,56],simpli:24,simplif:24,singl:[31,32,33,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,52,56],size:[0,12,13,29],skew:24,skew_axi:[24,41],skewed_imag:41,slice:52,slow:[20,26],small:52,smaller:24,snap:24,snippet:28,so:[21,27,52,56],solut:56,solv:24,some:[24,26,28,29,56],sometim:24,sort:[2,3,4,5,24],sourc:[0,2,3,4,5,9,10,12,13,15,16,17,18,19,20,22,23,24],space:24,spatial_feature_offset:0,spatial_feature_scal:0,spatial_features_coarsen:0,spatio:29,specif:[26,27,31,32,33,36,38,39,51,52],specifi:24,spectral:24,spin:56,spot:24,sqrt:24,ss:28,stabil:24,stabilis:[24,30],stack:[24,52],standard:[0,18],standard_featur:0,start:[24,27,28,56],state:[12,13],state_upd:[12,13],step:27,still:24,stop:[4,5,15,16,17,18,19,20,23],stop_fit:[5,15,16,17,18,19,20],stop_run:23,stop_train:[2,3,4,5],str:[0,2,3,4,5,10,15,16,17,18,19,20,22,23,24],straight:20,strategi:[12,13],strength:26,string:[10,12,13,23],strong:24,structur:29,studio:[26,29,51,53],sub:[12,13],submodul:[12,13],subtab:52,success:27,suffici:[24,26],sum:22,summari:[1,26],supervis:[13,24,29,30],support:[12,13,14,24,26,28,52],support_vector:20,supports_mask:[12,13],supportvectorregressor:20,suppress:[24,30],sure:52,symmetr:24,system:27,t:[24,52],tabl:28,tackl:[24,56],take:10,target:[15,16,17,18,19,20],target_imag:[2,3,4,5,12,13,22],task:[1,11,24],tbf:8,techniqu:22,tell:52,tempor:29,tensor:[12,13],tensorflow:[12,13],termin:[27,52],test:[15,16,17,18,19,20,28],tf:[12,13],than:[20,24],thaw:[0,15,16,17,18,19,20],thei:[51,52],them:[30,52],therefor:24,thi:[0,1,2,3,4,5,10,12,13,15,16,17,18,19,20,22,24,27,28,51,52,56],those:52,thread:[15,16,17,18,19,20],three:53,threshold:24,through:29,thu:24,tif:[51,52],tiff:51,tile_max_margin:2,tile_min_margin:2,time:[24,28,52],timelaps:24,tini:29,todo:[10,28,52],toler:24,too:[20,24,26],tool:29,toolkit:26,tooltip:52,top:[6,52],total_num_patch:[4,12,13],tour:29,track:[12,13,25],train:[2,3,4,5,13,15,16,17,18,19,20,22,23,31,32,33,34,35,36,37,38,39],train_valid_ratio:[2,3,4,5,12,13],trainabl:[12,13],trainable_vari:[12,13],trainable_weight:[12,13],training_architectur:[4,13],transform:[2,3,4,5,6,28,31,32,33,36,38,39,52],transforms_list:[2,3,4,5],translat:[0,2,3,4,5,6,23,31,32,33,34],translatorfgr:5,treat:24,tri:[26,52],tricki:24,troubl:26,tune:[24,29,52],tupl:[2,10,23],turn:[4,24],tutori:29,two:[24,27,52],type:[10,15,16,17,18,19,20,56],typic:[24,29,56],tyx:24,uint8:51,unadvis:24,unbalanc:24,under:[12,13],understand:[29,56],undon:24,unet:13,unet_core_2d:13,unet_core_3d:13,unetmodel:11,union:[2,3,4,5,24],unit:26,unless:24,unsupervis:29,until:24,untouch:24,unzip:27,up:[29,52],updat:[12,13],upon:10,upstream:6,us:[0,1,6,10,11,12,13,19,20,21,23,24,25,26,27,29,30,40,41,42,43,44,45,46,47,48,49,50,52],use_model:23,useful:24,useless:20,user:[28,29,51,52,53],val_mark:13,valid:[15,16,17,18,19,20],valu:[15,16,17,18,19,20,24,52],vari:[6,24],variabl:[12,13],variable_dtyp:[12,13],varianc:[24,30],variance_stabilis:[24,50],variancestabilisationtransform:50,variant:[23,52],variat:24,variou:[11,21,30,51],ve:52,vector:[14,24],verbos:[12,13,16,19],veri:[24,26,29],versatil:28,via:[27,52],visual:[22,23],volum:24,voxel:24,voxel_keep_ratio:5,vst:[24,50],w:0,wa:[12,13],wai:[0,20,24,25,27],want:[0,24,52],we:[1,6,11,24,27,28,29,30,51,52,56],weak:26,weight:[12,13],welcom:[27,52],well:[0,24,28,52,56],when:[0,15,16,17,18,19,20,24],whenev:26,where:[0,29,52],wherea:26,whether:[12,13],which:[0,1,6,13,24,27,52],who:0,wiki:24,wikipedia:24,window:[28,52],within:[4,5,24],without:52,work:[24,26,29,51],wors:24,worth:52,would:[24,51,52],write:10,x:[15,16,17,18,19,20,52],x_test:[15,16,17,18,19,20],x_train:[15,16,17,18,19,20],x_valid:[15,16,17,18,19,20],xy:24,y:[15,16,17,18,19,20,27,52],y_test:[15,16,17,18,19,20],y_train:[15,16,17,18,19,20],y_valid:[15,16,17,18,19,20],yeo:24,yet:56,you:[1,24,25,27,28,29,30,34,35,40,41,42,43,44,45,46,47,48,49,50,51,52,56],your:[26,27,29,52,56],yx:51,z:[24,52],z_axi:[24,41],zarr:52,zero:[13,27],zip:51},titles:["Feature Generator","Image Translator","ImageTranslatorBase","ImageDenoiserClassic - Classic Image Denoiser","ImageTranslatorCNN - Convolutional Neural Network","ImageTranslatorFGR - Feature Generation&amp;Regression","API Introduction","IO","datasets","folders","IO","NN","JINetModel","UNetModel","Regressors","CatBoost Regressor","LightGBM Regressor","Linear Regressor","NN Regressor","Random Forest Regressor","Support Vector Regressor","Restoration","Deconvolve Restoration","Denoise Restoration","Transforms","Report a bug/Request a feature","Hardware Requirements","Install Aydin","Why Aydin?","Getting started, with bundles:","API Tutorials","Denoising an image using ImageDenoiserClassic","Denoising an image using ImageTranslatorCNN","Denoising an image using ImageTranslatorFGR","How to implement Noise2Noise using ImageTranslatorFGR","How to implement supervised denoising using image translators","Denoising an image using Classic restoration API","Deconvolving an image using aydin API","Denoising an image using Noise2SelfCNN restoration API","Denoising an image using Noise2SelfFGR restoration API","Apply Attenuation transform","Apply Deskew transform","Apply fixed pattern transform","Apply high pass transform","Apply histogram equalisation transform","Apply motion stabilisation transform","Apply padding transform","Apply periodic noise suppression transform","Apply range transform","Apply salt-pepper transform","Apply variance stabilisation transform","Aydin CLI Tutorials","Aydin Studio Tutorials","Tutorials Home","Denoising Basics with Aydin.","Denoising Spinning-Disk Confocal Microscopy Images with Aydin","Aydin Use-Cases, and the Art &amp; Science of Image Denoising."],titleterms:{"case":56,access:28,all:52,an:[31,32,33,36,37,38,39],api:[6,28,30,36,37,38,39],appli:[40,41,42,43,44,45,46,47,48,49,50],art:56,attenu:40,attenuationtransform:24,automat:28,aydin:[27,28,37,51,52,54,55,56],backend:51,basic:54,blind:28,bug:25,bundl:[27,29],can:51,catboost:15,channel:52,check:51,choos:51,cite:29,classic:[3,23,36],cli:[28,51],comput:51,conda:27,confoc:55,convolut:4,crop:52,cuda:27,custom:51,data:28,dataset:8,deconvolut:28,deconvolv:[22,37,51],denois:[3,23,28,31,32,33,35,36,38,39,51,52,54,55,56],deskew:41,deskewtransform:24,detect:28,dimens:52,disk:55,document:29,environ:27,equalis:44,extensiblefeaturegener:0,featur:[0,5,25],featuregeneratorbas:0,file:[51,52],fix:42,fixedpatterntransform:24,folder:9,forest:19,gener:[0,5],get:29,gui:28,halucin:28,hardwar:26,helper:28,high:43,highpasstransform:24,histogram:44,histogramequalisationtransform:24,home:53,how:[29,34,35],hyperstack:[28,52],imag:[1,3,28,30,31,32,33,35,36,37,38,39,51,52,55,56],imagedenoiserclass:[3,31],imagetranslatorbas:2,imagetranslatorcnn:[4,32],imagetranslatorfgr:[5,33,34],implement:[34,35],instal:27,interpret:51,introduct:6,io:[7,10],jinetmodel:12,less:28,let:52,lightgbm:16,linear:17,linux:27,load:52,luci:22,mac:27,microscopi:55,model:[51,52],more:28,motion:45,motionstabilisationtransform:24,multipl:51,network:4,neural:4,nn:[11,18],nois:47,noise2nois:34,noise2selfcnn:[23,38],noise2selffgr:[23,39],option:[51,52],osx:27,pad:46,paddingtransform:24,pass:43,pattern:42,pepper:49,period:47,periodicnoisesuppressiontransform:24,pip:29,post:52,postprocess:28,pre:[51,52],preprocess:28,preview:52,process:52,psf:51,random:19,rang:48,rangetransform:24,read:51,regress:5,regressor:[14,15,16,17,18,19,20],report:25,request:25,requir:[26,29],restor:[21,22,23,30,36,38,39],richardson:22,right:51,robust:28,s:52,salt:49,saltandpeppertransform:24,save:52,scienc:56,select:52,singl:51,spin:55,split:52,spot:28,stabilis:[45,50],standardfeaturegener:0,start:[29,52],studio:52,supervis:35,support:[20,27],suppress:47,tab:52,train:[51,52],transform:[24,30,40,41,42,43,44,45,46,47,48,49,50],translat:[1,30,35],tutori:[30,51,52,53],unetmodel:13,us:[28,31,32,33,34,35,36,37,38,39,51,56],varianc:50,variancestabilisationtransform:24,vector:20,via:28,view:[28,51],why:28,window:27,your:51}})