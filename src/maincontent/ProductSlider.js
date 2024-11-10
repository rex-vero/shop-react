import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade, EffectFlip } from "swiper/modules";

const ProductSlider = ({ item, page }) => {
    return (
        <Swiper className="w-100 h-100" effect={page === 's' ? 'fade' : 'flip'} pagination={{ clickable: true }} autoplay={{ delay: 10000 }} spaceBetween={20} modules={[Navigation, Pagination, Autoplay, EffectFade, EffectFlip]} navigation>
            {item.images.map((image, key) => {
                return (
                    <SwiperSlide key={key}>
                        <img src={image} className="img img-fluid" alt={item.title} />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    );
}

export default ProductSlider;