import { shallowMount, createLocalVue } from '@vue/test-utils';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import router from '@/router/index';
import Init from '@/views/Init.vue';
// import { render, fireEvent } from '@testing-library/vue';
// import Main from '@/views/Main.vue';
// import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(BootstrapVueIcons);
router.mode = 'abstract';

beforeEach(() => {
  // this resets the router history before each test -
  // otherwise it carries over and you don't get a proper result
  router.history.current = {
    name: null,
    meta: {},
    path: '/',
    hash: '',
    query: {},
    params: {},
    fullPath: '/',
    matched: [],
  };
});

describe('Desktop', () => {
  beforeEach(() => {
    jest.spyOn(window.screen, 'width', 'get').mockReturnValue(1920);
  });
  it('should detect a desktop screen width', () => {
    const wrapper = shallowMount(Init, {
      localVue,
      router,
    });
    expect(wrapper.vm.isMobile()).toBe(false);
  });
  it('should load Main.vue', () => {
    const wrapper = shallowMount(Init, {
      localVue,
      router,
    });
    expect(wrapper.vm.$route.name).toBe('Main');
  });
});

describe('Mobile', () => {
  beforeEach(() => {
    jest.spyOn(window.screen, 'width', 'get').mockReturnValue(400);
  });
  it('should detect a mobile screen width', () => {
    const wrapper = shallowMount(Init, {
      localVue,
      router,
    });
    expect(wrapper.vm.isMobile()).toBe(true);
  });
  it('should load MainMobile.vue', () => {
    const wrapper = shallowMount(Init, {
      localVue,
      router,
    });
    expect(wrapper.vm.$route.name).toBe('MainMobile');
  });
});
