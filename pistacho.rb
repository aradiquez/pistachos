require 'sinatra'
require 'json'

set :public_folder, 'public'

get '/' do
  erb :index
end

get '/pistachos' do
  content_type :json
  { pistachos: pistachos }.to_json
end

helpers do
  def pistachos
    [
      {
        name: 'Delicios 1',
        image: 'https://static2.abc.es/media/familia/2018/02/28/pistachos-kHxF--620x349@abc.jpg',
        active: false
      },
      {
        name: 'Delicios 2',
        image: 'https://okdiario.com/img/recetas/2017/04/24/beneficios-de-los-pistachos.jpg',
        active: false
      },
      {
        name: 'Delicios 3',
        image: 'https://cdn.20m.es/img2/recortes/2018/02/24/645401-600-338.jpg',
        active: false
      },
      {
        name: 'Delicios 4',
        image: 'https://www.ecestaticos.com/imagestatic/clipping/445/ffe/445ffe5a90a95df703f1554e6bab5134/por-que-los-pistachos-han-vuelto-a-ponerse-de-moda-y-cuales-son-sus-beneficios.jpg',
        active: false
      },
      {
        name: 'Delicios 5',
        image: 'https://www.nutrafeliz.cl/wp-content/uploads/2018/01/shutterstock_149492621-Pistachos-con-c%C3%A1scara-kxk.jpg',
        active: false
      },
      {
        name: 'Delicios 6',
        image: 'https://static1.ideal.es/www/multimedia/201802/26/media/cortadas/pistachos-k7D-U501077686195tIG-624x385@Ideal.jpg',
        active: false
      },
      {
        name: 'Delicios 7',
        image: 'https://estaticos.miarevista.es/media/cache/760x570_thumb/uploads/images/article/591045f85cafe8a4353c9869/principal-pistachos.jpg',
        active: false
      },
      {
        name: 'Delicios 8',
        image: 'https://www.frutoseco.com/706/pistacho-crudo-cascara-250gramos.jpg',
        active: false
      }
    ]
  end
end