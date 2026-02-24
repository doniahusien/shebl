<template>
  <BaseHero
    :title="contact?.data?.banner?.title"
    :subtitle="contact?.data?.banner?.description"
    :bgImage="contact?.data?.banner?.image"
    :loading="status == 'pending'"
  />

  <ContactInfo :info="contact?.data?.contact_info" :loading="status == 'pending'" />
</template>

<script setup lang="ts">
const { locale } = useI18n();

const { data: contact, status, error } = await useAsyncData<ApiResponse<ContactResponse>>(
  "contact",
  () =>
    useGlobalFetch<ApiResponse<ContactResponse>>("/preview?banner_type=contact_banner"),
  { watch: [locale] }
);

watch(contact, (newVal) => {
  if (newVal?.data?.banner) {
    useDynamicMeta({
      description: newVal.data.banner.description,
      image: newVal.data.banner.image,
    });
  }
});
</script>
