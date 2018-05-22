import { Component, ViewEncapsulation } from '@angular/core';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';

storiesOf('My TypeAhead Story', module)
  .addDecorator(
    moduleMetadata({
      imports: [Component, ViewEncapsulation, NguiAutoCompleteModule],
      schemas: [],
      declarations: [],
      providers: [],
    })
  )
  .add('Default', () => ({
    component: NguiAutoCompleteModule
  }))
  .add('with placeholder', () => ({
    component: NguiAutoCompleteModule,
    props: {
      placeholder: 'typeahead man...',
    }
  }));