// eslint-disable-next-line
import { storiesOf } from '@storybook/vue';
import BaseReactiveList from './BaseReactiveList.vue';
import './styles.css';

storiesOf('Range Components', module).add('RangeList', () => ({
  template: `<ReactiveBase app="good-books-ds" credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d" >
              <div class="row">
                <div class="col">
                <SingleRange
                  componentId="BookSensor"
                  dataField="average_rating"
                  :data="[{ 'start': 0, 'end': 3, 'label': 'Rating < 3' },
                      { 'start': 3, 'end': 4, 'label': 'Rating 3 to 4' },
                      { 'start': 4, 'end': 5, 'label': 'Rating > 4' }]"
                />
                </div>

                <div class="col">
                <ReactiveList
                  componentId="SearchResult"
                  dataField="original_title.raw"
                  className="result-list-container"
                  :pagination="true"
                  :from="0"
                  :size="5"
                  :react="{and: ['BookSensor']}"
                >
                  <div slot="onData" slot-scope="{ item }">
                  <div class="flex book-content" key="item._id">
                    <img :src="item.image" alt="Book Cover" class="book-image" />
                    <div class="flex column justify-center ml20">
                      <div class="book-header">{{ item.original_title }}</div>
                      <div class="flex column justify-space-between">
                        <div>
                          <div>
                            by <span class="authors-list">{{ item.authors }}</span>
                          </div>
                          <div class="ratings-list flex align-center">
                            <span class="stars">
                              <i v-for="(item, index) in Array(item.average_rating_rounded).fill('x')" class="fas fa-star" :key="index" />
                            </span>
                            <span class="avg-rating">({{item.average_rating}} avg)</span>
                          </div>
                        </div>
                        <span class="pub-year">Pub {{item.original_publication_year}}</span>
                      </div>
                    </div>
                    </div>
                  </div>
              </ReactiveList>
                </div>
              </div>
              </ReactiveBase>`,
}));
storiesOf('List Components', module).add('SingleList', () => ({
  template: `<ReactiveBase app="good-books-ds" credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d" >
  <div class="row">
    <div class="col">
      <SingleList
        componentId="BookSensor"
        dataField="original_series.raw"
        :size="100"
      />
    </div>

    <div class="col">
    <ReactiveList
      componentId="SearchResult"
      dataField="original_title.raw"
      className="result-list-container"
      :pagination="true"
      :from="0"
      :size="5"
      :react="{and: ['BookSensor']}"
    >
      <div slot="onData" slot-scope="{ item }">
      <div class="flex book-content" key="item._id">
        <img :src="item.image" alt="Book Cover" class="book-image" />
        <div class="flex column justify-center ml20">
          <div class="book-header">{{ item.original_title }}</div>
          <div class="flex column justify-space-between">
            <div>
              <div>
                by <span class="authors-list">{{ item.authors }}</span>
              </div>
              <div class="ratings-list flex align-center">
                <span class="stars">
                  <i v-for="(item, index) in Array(item.average_rating_rounded).fill('x')" class="fas fa-star" :key="index" />
                </span>
                <span class="avg-rating">({{item.average_rating}} avg)</span>
              </div>
            </div>
            <span class="pub-year">Pub {{item.original_publication_year}}</span>
          </div>
        </div>
        </div>
      </div>
  </ReactiveList>
    </div>
  </div>
  </ReactiveBase>`,
}));

storiesOf('List Components', module).add('MultiList', () => ({
  template: `<ReactiveBase app="good-books-ds" credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d" >
              <div class="row">
                <div class="col">
                <MultiList
                  componentId="BookSensor"
                  dataField="original_series.raw"
                  :size="100"
                />
                </div>

                <div class="col">
                <ReactiveList
                  componentId="SearchResult"
                  dataField="original_title.raw"
                  className="result-list-container"
                  :pagination="true"
                  :from="0"
                  :size="5"
                  :react="{and: ['BookSensor']}"
                >
                  <div slot="onData" slot-scope="{ item }">
                  <div class="flex book-content" key="item._id">
                    <img :src="item.image" alt="Book Cover" class="book-image" />
                    <div class="flex column justify-center ml20">
                      <div class="book-header">{{ item.original_title }}</div>
                      <div class="flex column justify-space-between">
                        <div>
                          <div>
                            by <span class="authors-list">{{ item.authors }}</span>
                          </div>
                          <div class="ratings-list flex align-center">
                            <span class="stars">
                              <i v-for="(item, index) in Array(item.average_rating_rounded).fill('x')" class="fas fa-star" :key="index" />
                            </span>
                            <span class="avg-rating">({{item.average_rating}} avg)</span>
                          </div>
                        </div>
                        <span class="pub-year">Pub {{item.original_publication_year}}</span>
                      </div>
                    </div>
                    </div>
                  </div>
              </ReactiveList>
                </div>
              </div>
              </ReactiveBase>`,
}));

storiesOf('Search Components', module).add('Data Search', () => ({
  template: `<ReactiveBase app="good-books-ds" credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d" >
  <DataSearch
    className="result-list-container"
    categoryField="authors.raw"
    componentId="BookSensor"
    :dataField="['original_title', 'original_title.search']"
  />
  <ReactiveList
  componentId="SearchResult"
  dataField="original_title.raw"
  className="result-list-container"
  :pagination="true"
  :from="0"
  :size="5"
  :react="{and: ['BookSensor']}"
>
    <div slot="onData" slot-scope="{ item }">
    <div class="flex book-content" key="item._id">
      <img :src="item.image" alt="Book Cover" class="book-image" />
      <div class="flex column justify-center ml20">
        <div class="book-header">{{ item.original_title }}</div>
        <div class="flex column justify-space-between">
          <div>
            <div>
              by <span class="authors-list">{{ item.authors }}</span>
            </div>
            <div class="ratings-list flex align-center">
              <span class="stars">
                <i v-for="(item, index) in Array(item.average_rating_rounded).fill('x')" class="fas fa-star" :key="index" />
              </span>
              <span class="avg-rating">({{item.average_rating}} avg)</span>
            </div>
          </div>
          <span class="pub-year">Pub {{item.original_publication_year}}</span>
        </div>
      </div>
      </div>
    </div>
</ReactiveList>
  </ReactiveBase>`,
}));

storiesOf('Result Components/Reactive List', module)
  .add('Basic', () => ({
    components: { BaseReactiveList },
    template: '<base-reactive-list/>',
  }))
  .add('With Pagination', () => ({
    // methods: {
    //   onPageChange: (page, total) => {
    //     console.log('Called page change', page, total);
    //   },
    // },
    components: { BaseReactiveList },
    template: '<base-reactive-list :subProps="{ pagination: true }"/>',
    // template:
    //   '<base-reactive-list :subProps="{ pagination: true }" :subEvents="{ pageChange: onPageChange }"/>',
  }));
